import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FC, useEffect, useState } from "react";
import { State } from "../models/State";
import { states } from "../data/States";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

interface ProvinceProps {
  selectedStates: State[];
  setSelectedProvinces: any;
}

export const Provinces: FC<ProvinceProps> = ({
  selectedStates,
  setSelectedProvinces,
}: ProvinceProps) => {
  const [filteredStates, setFilteredStates] = useState<any[]>([]);

  useEffect(() => {
    if (selectedStates.length) {
      const data = selectedStates.find(state => state.key === 'wszystkie') ? states : selectedStates;
      
      const filtered = data
        .map((state) => {
          state.provinces.map((province) => {
            province.stateName = state.name;
            return state;
          });
          return state;
        })
        .map((state) => state.provinces)
        .flat()

        const merged = [[{name: 'wszystkie', flat: 'wszystkie', stateName: 'wszystkie'}], filtered];

      setFilteredStates(merged.flat());
    }
  }, [selectedStates]);


  return (
    <>
      <Autocomplete
        multiple
        id="states"
        options={filteredStates}
        groupBy={(option) => option.stateName}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => {
          
          setSelectedProvinces(value);
        }}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Wybierz powiaty"
            placeholder="Wybierz powiaty..."
          />
        )}
      />
    </>
  );
};
