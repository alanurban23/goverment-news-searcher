// import { Province } from "../../src/models/Province";
import { englishProvinces } from "./english";
import { polishProvinces } from "./polish";

export const mergeArrays = () => {
  const mergedArray = polishProvinces.map((state, stateIndex) => {
    state.provinces = state.provinces.map((province, provinceIndex) => {
      province = {
        name: province.name,
        flat: englishProvinces[stateIndex].provinces[provinceIndex].name,
      };
      return province;
    });
    return state;
  });

  // return mergedArray;
  
};
