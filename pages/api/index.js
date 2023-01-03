import { states } from "../../data/states";
import { getYearNumber, getMonthNumber } from "../../helpers/dates";

export default function handler(req, res) {
  if (req.method === "GET") {
  } else if (req.method === "POST") {
    res.status(200).json(filter(req.body));
  }
}
const filter = (query) => {
  const startDate = query.startDate ? new Date(query.startDate) : null;
  const endDate = query.endDate ? new Date(query.endDate) : null;

  const filteredStates = () => query.states.includes('wszystkie') ? states : query.states.map((queryState) => {
    return states.find((state) => {
      return state.name === queryState;
    });
  });
  
  
  
  const filteredProvinces = () => filteredStates().map((state) => {
    if (query.provinces && query.provinces.length && !query.provinces.includes('wszystkie')) {
      state.provinces = state.ep.filter((el) => {
        if (query.provinces.includes(el.Province)) {
          return el;
        }
      });
    } else {
      state.provinces = state.ep;
    }
    return state;
  });

  const searchSubStringInString = (string, substring) => {
    const reg = new RegExp(substring, 'gi');
    return string.match(reg);
  }

  
  const filteredSearch = () => filteredProvinces().map((state) => {
    if (query.search && query.search.length) {
      state.provinces = state.provinces.filter((province) => {
        if (searchSubStringInString(province.Title, query.search)) {
          return province;
        }
      });
    }

    return state;
  });
    
  const mapedDate = () => filteredSearch().filter((state) => {
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
      

  const removedEpProperty = () => filteredDate().map((state) => {
    const { ep, ...other } = state;
    return other;
  });
  

  return removedEpProperty();
};
