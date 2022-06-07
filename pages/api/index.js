import { states } from "../data/states";
import { getYearNumber, getMonthNumber } from "../helpers/dates";

export default function handler(req, res) {
  if (req.method === "GET") {
  } else if (req.method === "POST") {
    console.log("req.body", req.body);
    res.status(200).json(filter(req.body));
  }
}
const filter = (query) => {
  const startDate = query.startDate ? new Date(query.startDate) : null;
  const endDate = query.endDate ? new Date(query.endDate) : null;

  const filteredStates = () => query.states.map((queryState) => {
    console.log(states);
    console.log(queryState);
    return states.find((state) => state.name === queryState);
  });

  
  const filteredProvinces = () => filteredStates().map((state) => {
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

  
  const filteredSearch = () => filteredProvinces().map((state) => {
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
  
  const mapedDate = () => filteredSearch().filter((state) => {
    state.provinces = state.provinces.map((province) => {
      province.date = `${getYearNumber(province.restdate)}-${getMonthNumber(
        province.restdate
        )}-${province.daydate}`;
        console.log("province.date", province.date);
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
      

  const removedEpProperty = () => filteredDate().map((state) => {
    const { ep, ...other } = state;
    return other;
  });
  

  return removedEpProperty();
};
