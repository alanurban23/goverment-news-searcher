// import fetch from 'node-fetch';
import fetch from 'isomorphic-unfetch';
import cron from 'cron';
import fs from 'fs';
import {uniqBy, isEqual} from 'lodash';

const TASK_IDS = [
'513c2010-7f1a-47bb-b1ce-a369b5a68623',
'1fd7ba87-2f16-41ff-b51c-d5f00f41b658',
'6083409b-762a-4671-bde6-17db6473305e',
'47f4bc1a-8158-4fd8-8a2c-74834b7572bb',
'46b794f3-64be-4ad7-b30d-89bcb93b3603',
'd69c5590-e737-4f2a-864e-9a22cdb6c251',
'45169a9e-356e-4329-99ba-558a61f38964',
'1fbddfd2-66ce-46ef-b191-e2d061d08991',
'051e66b1-5757-4666-b0c5-093e859bfd50',
'daa19b12-8343-4502-8a26-be89e344c388',
'2f8853e9-b7f1-409e-8f23-3c73163240fe',
'2a5bda62-afd8-4988-95f7-d9ec8457b13a',
'c8eae760-379d-4cf2-844f-1f3580465860',
'0b1dbefc-5018-4267-a8aa-6be120e7a34c',
'd177de52-a908-4f5d-9f20-6028ab32c4f2',
'd4db2b8a-f2e9-44f3-9f10-225b043d883a'
];

//Create a map set of the task ids with the task name as the key
const TASK_MAP = new Map();
TASK_MAP.set('513c2010-7f1a-47bb-b1ce-a369b5a68623', 'kujawskoPomorskie');
TASK_MAP.set('1fd7ba87-2f16-41ff-b51c-d5f00f41b658', 'lubuskie');
TASK_MAP.set('6083409b-762a-4671-bde6-17db6473305e', 'wielkopolskie');
TASK_MAP.set('47f4bc1a-8158-4fd8-8a2c-74834b7572bb', 'podlaskie');
TASK_MAP.set('46b794f3-64be-4ad7-b30d-89bcb93b3603', 'lubelskie');
TASK_MAP.set('d69c5590-e737-4f2a-864e-9a22cdb6c251', 'slaskie');
TASK_MAP.set('45169a9e-356e-4329-99ba-558a61f38964', 'malopolskie');
TASK_MAP.set('1fbddfd2-66ce-46ef-b191-e2d061d08991', 'opolskie');
TASK_MAP.set('051e66b1-5757-4666-b0c5-093e859bfd50', 'podkarpackie');
TASK_MAP.set('daa19b12-8343-4502-8a26-be89e344c388', 'lodzkie');
TASK_MAP.set('2f8853e9-b7f1-409e-8f23-3c73163240fe', 'mazowieckie');
TASK_MAP.set('2a5bda62-afd8-4988-95f7-d9ec8457b13a', 'warminskoMazurskie');
TASK_MAP.set('c8eae760-379d-4cf2-844f-1f3580465860', 'zachodnioPomorskie');
TASK_MAP.set('0b1dbefc-5018-4267-a8aa-6be120e7a34c', 'pomorskie');
TASK_MAP.set('d177de52-a908-4f5d-9f20-6028ab32c4f2', 'dolnoslaskie');
TASK_MAP.set('d4db2b8a-f2e9-44f3-9f10-225b043d883a', 'swietokrzyskie');


// const API_KEY = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImdXS3hWc0F4SHhaMDlDcWh6NkNJb3ciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzUzNDM0MDIsImV4cCI6MTY3NTQyOTgwMiwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5vY3RvcGFyc2UuY29tIiwiY2xpZW50X2lkIjoiT3BlbkFwaSIsInN1YiI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImF1dGhfdGltZSI6MTY3NTM0MzQwMiwiaWRwIjoibG9jYWwiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbGFudXJiYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhbGFudXJiYW4iLCJ1bmlxdWVfbmFtZSI6ImFsYW51cmJhbiIsInJlZ2lzdGVyX2RhdGUiOiIyMDIxLTEyLTA0VDEwOjQyOjI2KzAwOjAwIiwibGFzdF9sb2dpbl9kYXRlIjoiMjAyMy0wMS0yNVQwMTowOTozOCswMDowMCIsImxhc3RfcGFzc3dvcmRfY2hhbmdlZF9kYXRlIjoiMjAyMy0wMS0yNVQwMTowOToyOCswMDowMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbCI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.V4dz9WnOqgHz2uBSTITkal4I9tXxr21PXJdSn6mwJIetGV2No95B-pdN96lpMCEQUI2kgZcfN2QbQUDDHhDg3vmJVtRUAb6Z63tRcTI9_DliVceVIutC8WwgGxe9te_awZ9bVx1pmzYGT06KIXGaOCDuccKI7nYdNClxLDfQU5NW-NPF6DRn0967VG74G2_JO99mm9fhAROJLsF0ILQVxN-9cZ_houup1taJtl8oGcpwqLeMDb4Rh6Z8ml5rSvwsfnAijovmsupk_cUdaR3S2_oAbzA1geJLn61u8Xqth04qATdaZdxcnoWnD8VzDzUs-lUTGQ_PF9PQfslaw_MTVQ';

// let refresh_token_key = 'uXOKgUel_Rmtn3p5BTgzH2MgT1sltSxR_ImaweC5gOY';
// let api_key;


const getAPIKey = async () => {
    const response = await fetch(`https://openapi.octoparse.com/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "username": "alanurban",
            "password": "Toor-282109",
            "grant_type": "password" 
        })
    });

    const res = await response.json();

    // console.log(res.data.access_token);

    return `Bearer ${res.data.access_token}`;
    
};

// const refreshToken = async () => {
//     const response = await fetch(`https://openapi.octoparse.com/token`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 "refresh_token": refresh_token_key,
//                 "grant_type": "refresh_token"
//             })
//         });

//         const data = await response.json();

//         api_key = `Bearer ${data.access_token}`;
//         refresh_token_key = data.refresh_token;

//         console.log(data.access_token);
// };

const Tasks = async (req, res) => {
    // refreshToken();

    const API_KEY = await getAPIKey();

    // console.log(API_KEY);

    for (const taskId of TASK_IDS) {
        const response = await fetch(`https://openapi.octoparse.com/data/all?taskId=${taskId}&offset=0&size=500`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': API_KEY
            }
        });

        const data = await response.json();

        console.log(data);

        fs.writeFile(`data//${TASK_MAP.get(taskId)}.json`, JSON.stringify(uniqBy(data.data.data, obj => obj.Title)), 'utf8', (err) => {
            if (err) throw err;
        });
    }
};

// refreshToken();

// const cronJobs = () => {
//     refreshToken();
// };

//o piątej rano
const minuteCronJob = cron.job('0 5 * * *', Tasks);
minuteCronJob.start();

export default Tasks;
