import { states } from "../../data/states";
import { getYearNumber, getMonthNumber } from "../../helpers/dates";
import { fetchTask } from "../page";

export const getDataFromApi = async () => {
  // let formData = new FormData();
  // formData.append('name', 'John');
  // formData.append('password', 'John123');

  const res = await fetch("https://openapi.octoparse.com/data/all", {
    method: "POST",
    headers: new Headers({
      "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImdXS3hWc0F4SHhaMDlDcWh6NkNJb3ciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NjI0NzY5NTQsImV4cCI6MTY2MjU2MzM1NCwiaXNzIjoiaHR0cHM6Ly9pZGVudGl0eS5vY3RvcGFyc2UuY29tIiwiY2xpZW50X2lkIjoiT3BlbkFwaSIsInN1YiI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImF1dGhfdGltZSI6MTY2MjQ3Njk1NCwiaWRwIjoibG9jYWwiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImY5ZmFmNTdjLTQ2MTItNDkyNC04MDUzLWExN2M3NDc0MTE0ZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJhbGFudXJiYW4iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhbGFudXJiYW4iLCJ1bmlxdWVfbmFtZSI6ImFsYW51cmJhbiIsInJlZ2lzdGVyX2RhdGUiOiIxMi8wNC8yMDIxIDE4OjQyOjI2IiwibGFzdF9sb2dpbl9kYXRlIjoiMDkvMDUvMjAyMiAwNjowMDoxMCIsImxhc3RfcGFzc3dvcmRfY2hhbmdlZF9kYXRlIjoiMTIvMDQvMjAyMSAxODo0MjoyNiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbCI6ImFsYW4udXJiYW4yM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.SWrICLfMu41zQ5AVrI0IDyBfVYFfG5F8ZZqUyzyGRCVBnn15QtJ-4Xrdv20lG29J2mQqds577cVAkCTS1MEjie6Vyc1rRdlsoaehypDa5xDihsZEiRDc74p1sbi2L3iImWo-t4MX-6epvCTNO0A8-AMBAaTojEagJNWPpFJCQX3KcgnFPwfGLEniLnE0avL6isr74wezS9NkciOQi2f5wGQV1q5tsIQXILsCuuGTyP0yQ9oxbljy8P4CwEVg7mVZhDNL9KRe-_npxk8wYmu7qE_M9fvml9iCVuteaHxf4d4mPb_RbuWuLKcBgGYrV3tWKndqhkrqREBi2qzZZSMS9Q",
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }),
    body: JSON.stringify({
      item1: 'value1',
      item2: 'value2'
    }),
    // body: formData
    // body: JSON.stringify({
    //   "taskId": "d69c5590-e737-4f2a-864e-9a22cdb6c251",
    //   "size": 100
    // }),
    // body: {
    //   "taskId": "d69c5590-e737-4f2a-864e-9a22cdb6c251",
    //   "size": 100
    // }
  });

  console.log(res);
};

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://openapi.octoparse.com/data/all`)
//   const data = await res.json();

//   console.log(data);

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(getDataFromApi());
  } else if (req.method === "POST") {
    res.status(200).json(filter(req.body));
  }
}

const filter = (query) => {
  const startDate = query.startDate ? new Date(query.startDate) : null;
  const endDate = query.endDate ? new Date(query.endDate) : null;

  const filteredStates = () =>
    query.states.map((queryState) => {
      return states.find((state) => state.name === queryState);
    });

  const filteredProvinces = () =>
    filteredStates().map((state) => {
      if (query.provinces && query.provinces.length) {
        state.provinces = state.ep.filter((el) => {
          if (query.provinces.includes(el.Province)) {
            return el;
          }
        });
        // return state;
      } else {
        state.provinces = state.ep;
      }
      // console.log(state);
      return state;
    });

  const filteredSearch = () =>
    filteredProvinces().map((state) => {
      if (query.search && query.search.length) {
        state.provinces = state.provinces.filter((province) => {
          if (province.Title.includes(query.search)) {
            return province;
          }
        });
      }

      return state;
    });

  // console.log("filteredSearch", filteredSearch);

  const mapedDate = () =>
    filteredSearch().filter((state) => {
      state.provinces = state.provinces.map((province) => {
        province.date = `${getYearNumber(province.restdate)}-${getMonthNumber(
          province.restdate
        )}-${province.daydate}`;

        return province;
      });

      return state;
    });

  const filteredDate = () =>
    mapedDate().filter((state) => {
      if (startDate && endDate) {
        state.provinces = state.provinces.filter((el) => {
          const parseDate = new Date(el.date);
          if (parseDate >= startDate && parseDate <= endDate) {
            return el;
          }
        });
        return state;
      }
      return state;
    });

  const removedEpProperty = () =>
    filteredDate().map((state) => {
      const { ep, ...other } = state;
      return other;
    });

  return removedEpProperty();
};
