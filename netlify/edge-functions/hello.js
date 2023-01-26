// import { Context } from "netlify:edge";

// import { Context } from "https://edge.netlify.com";

const API_KEY = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImdXS3hWc0F4SHhaMDlDcWh6NkNJb3ciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzQ3NzQ0OTgsImV4cCI6MTY3NDg2MDg5OCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5vY3RvcGFyc2UuY29tIiwiY2xpZW50X2lkIjoiT3BlbkFwaSIsInN1YiI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImF1dGhfdGltZSI6MTY3NDc3NDQ5OCwiaWRwIjoibG9jYWwiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbGFudXJiYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhbGFudXJiYW4iLCJ1bmlxdWVfbmFtZSI6ImFsYW51cmJhbiIsInJlZ2lzdGVyX2RhdGUiOiIyMDIxLTEyLTA0VDEwOjQyOjI2KzAwOjAwIiwibGFzdF9sb2dpbl9kYXRlIjoiMjAyMy0wMS0yNVQwMTowOTozOCswMDowMCIsImxhc3RfcGFzc3dvcmRfY2hhbmdlZF9kYXRlIjoiMjAyMy0wMS0yNVQwMTowOToyOCswMDowMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbCI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.YXOpIzjFC06z4yCBpCRYOeIkq2kt5l-zVbnIjlPCgLczdA5oVSIZUsg1bgLSPw1Y1zvkYmdtCW8gobJbcwsPQYxSDGtxOCHgoifXLbklmp6EBFXbUwA003DSUBUXqfdVv2lzCQbnZ5UQKnRCE6T8LjYRjgHz4KmRQct8xRb0pvXPJne2PfgO2i_Z4tphL_JPVbY_VvXRcHPm9XKPIFFSm-8G0N17pyskY55juWCcE9veXFtUvWCrNnI6mbfd-sWjpfSTCGvJtKoTJBNL_csgzBhQuClS80y3AE1koqa-K3DwyDItSBSmC-Q1Nu40bhQ4dBfiNhZw6_m74P8LKx6SMw';
const TASK_ID = '45169a9e-356e-4329-99ba-558a61f38964';

const TASK_IDS = [
  'd4db2b8a-f2e9-44f3-9f10-225b043d883a',
  'c8eae760-379d-4cf2-844f-1f3580465860',
  '1fd7ba87-2f16-41ff-b51c-d5f00f41b658',
  'daa19b12-8343-4502-8a26-be89e344c388',
  'd4db2b8a-f2e9-44f3-9f10-225b043d883a',
  'c8eae760-379d-4cf2-844f-1f3580465860',
  '1fd7ba87-2f16-41ff-b51c-d5f00f41b658',
  'daa19b12-8343-4502-8a26-be89e344c388',
  'd4db2b8a-f2e9-44f3-9f10-225b043d883a',
  'c8eae760-379d-4cf2-844f-1f3580465860',
  '1fd7ba87-2f16-41ff-b51c-d5f00f41b658',
  'daa19b12-8343-4502-8a26-be89e344c388',
  'd4db2b8a-f2e9-44f3-9f10-225b043d883a',
  'c8eae760-379d-4cf2-844f-1f3580465860',
  '1fd7ba87-2f16-41ff-b51c-d5f00f41b658',
  'daa19b12-8343-4502-8a26-be89e344c388'
];

// export default () => new Response("Hello world")
// export const config = { path: "/test" }

//Write a function that returns a response object by getting data from an API

// export default async (request, context) => {
//     // const req = new Request(`https://www.octoparse.com/api/task/get?apiKey=${API_KEY}&taskId=${TASK_ID}`);
//     const url = new URL(`https://openapi.octoparse.com/data/notexported?taskId=d69c5590-e737-4f2a-864e-9a22cdb6c251&size=1000`);
//   //Create a new request object
//     const req = new Request(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImdXS3hWc0F4SHhaMDlDcWh6NkNJb3ciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzQ2MDk4MzAsImV4cCI6MTY3NDY5NjIzMCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5vY3RvcGFyc2UuY29tIiwiY2xpZW50X2lkIjoiT3BlbkFwaSIsInN1YiI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImF1dGhfdGltZSI6MTY3NDYwOTgzMCwiaWRwIjoibG9jYWwiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbGFudXJiYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhbGFudXJiYW4iLCJ1bmlxdWVfbmFtZSI6ImFsYW51cmJhbiIsInJlZ2lzdGVyX2RhdGUiOiIyMDIxLTEyLTA0VDEwOjQyOjI2KzAwOjAwIiwibGFzdF9sb2dpbl9kYXRlIjoiMjAyMy0wMS0yNVQwMTowOTozOCswMDowMCIsImxhc3RfcGFzc3dvcmRfY2hhbmdlZF9kYXRlIjoiMjAyMy0wMS0yNVQwMTowOToyOCswMDowMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbCI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.A31lcLaLJJmEtSgSIhS0dTwpVwDroLjaHzW6GX_pOxwod9Czfx96TR6GmIBGt7mQ2U95iVYU0uog_SJ6pvqhFQU3kxXd59dIe_y7RBuNSRW5R6ZILjiZx6vb15m363mk-BszND80Djv29k2GFytPdIzjXphXTrFFAAfZ9Ql7sSBvAVIWkBFKTHGZp_PReHEgdSTtPDRKLOTBLsbmt-lbP9j8QUb5j7qipfUuvhCXVtdK6YS_FNV0uJ84J-Utxfciaqy70qjA2aV2-hhB4cEDLu6Qy960b5joODM5LY6Wjv1eMN0Jpc4Whppd_OIXI4cPaIu2GI_3Q3WHK_oVUg3OJw'
//       }
//     });
    
//     console.log(req);
//     const response = await context.next();
//     const text = await response.text();
  
//     return new Response(text.toUpperCase(), response);
//   };

export default async () => {
    let results = [];
    for (let taskId of TASK_IDS) {
        const response = await fetch(`https://openapi.octoparse.com/data/all?taskId=${taskId}&offset=0&size=10`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImdXS3hWc0F4SHhaMDlDcWh6NkNJb3ciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NzQ3MDk0NzcsImV4cCI6MTY3NDc5NTg3NywiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5vY3RvcGFyc2UuY29tIiwiY2xpZW50X2lkIjoiT3BlbkFwaSIsInN1YiI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImF1dGhfdGltZSI6MTY3NDcwOTQ3NywiaWRwIjoibG9jYWwiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbGFudXJiYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhbGFudXJiYW4iLCJ1bmlxdWVfbmFtZSI6ImFsYW51cmJhbiIsInJlZ2lzdGVyX2RhdGUiOiIyMDIxLTEyLTA0VDEwOjQyOjI2KzAwOjAwIiwibGFzdF9sb2dpbl9kYXRlIjoiMjAyMy0wMS0yNVQwMTowOTozOCswMDowMCIsImxhc3RfcGFzc3dvcmRfY2hhbmdlZF9kYXRlIjoiMjAyMy0wMS0yNVQwMTowOToyOCswMDowMCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbCI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.H8fd0StVDhQhBQF9-2OE2BF6WPsHABkt8DE9xQNCpsCQipUF8UWURxzUByAkN2yeM4K9AddFQS4nhPO3MFLECJ7kQKOxWFKFoObKKqkfR9v75gaQHbKWTIjts7y9cusYaMK8uBgy9-6vWsggWALdSGdCoAmzSXiVUmvhFYkXsiW2lMWTZ05vYPFJW5k_AVJ6VLzr1h7YO1khp8ZzhcR3x2oAzw4CgEwQNOsjZKlQAizbA1yhNs6nSAa9iCiSIKZUKMP5KSDRc08EQIaRT4MzcrwLJBbb77UHfhpgWwfqWGbpM1oBixMdZdZWv1Lk6k23rXDI5ZotaWuwGX9dN1JXIA'
        }
      });
      const data = await response.json();
      results.push(data);
    }
    console.log(results[0].data);
    return new Response(results);
    // return results;
  }
  

// export default () => new Response("Hello world")




  export const config = { path: "/hello" }
  