const fs = require("fs");

async function getServerSideProps() {
  const res = await fetch("https://openapi.octoparse.com/data/notexported", {
    method: 'GET',
    headers: new Headers({
        "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImdXS3hWc0F4SHhaMDlDcWh6NkNJb3ciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NjIxMDA1OTgsImV4cCI6MTY2MjE4Njk5OCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5vY3RvcGFyc2UuY29tIiwiY2xpZW50X2lkIjoiT3BlbkFwaSIsInN1YiI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImF1dGhfdGltZSI6MTY2MjEwMDU5OCwiaWRwIjoibG9jYWwiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbGFudXJiYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhbGFudXJiYW4iLCJ1bmlxdWVfbmFtZSI6ImFsYW51cmJhbiIsInJlZ2lzdGVyX2RhdGUiOiIxMi8wNC8yMDIxIDE4OjQyOjI2IiwibGFzdF9sb2dpbl9kYXRlIjoiMDkvMDIvMjAyMiAwNjozNTo0MSIsImxhc3RfcGFzc3dvcmRfY2hhbmdlZF9kYXRlIjoiMTIvMDQvMjAyMSAxODo0MjoyNiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbCI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.tf4XJl7U5JDAaeBO_ouMRdOmMOoxGmfgFuqNYtfjJKEhgWzxEXDb-8et8tEbMEbBCqqQ5nBn2oHsCtfEfhQZ7wUTYG1mtHICtG17uwwAulVocbzKEhib1yfmZNWnAAidSmIeEacAt-4g3ySOAtvmHnSB6b0nVTI42s28b8i_piVKxsu_pJD-7Y-qtS7C6FRgC3RkbAXduvjkOo-C1wZTJJnpap2-W-QayrB3JYra6ZNALaez9QzA8aNyFfTwK333pP7LHGykdYN-lYfKE3-QjXg7nnf_N2yZCwktUJosV0Fd_aq76yFwI_BBXQvvhW8yiy0jQlCdQtaHsIaPolTUAg",
        "Content-Type": "application/json"
    }),
    body: {
        'taskId': 'd69c5590-e737-4f2a-864e-9a22cdb6c251', 
        'size': 100
    }
    });

    console.log(res);
}

getServerSideProps();

// export default async function handler(req, res) {
//     //...
//     if (req.method === 'POST'){
//       fs.writeFileSync('./example.json', JSON.stringify(req.body))
//       return res.status(200).json({});
//     }
//     //...
//   }