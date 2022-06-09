import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { FC, useEffect, useState } from "react";
import { State } from "../models/State";

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
      
      const filtered = selectedStates
        .map((state) => {
          state.provinces.map((province) => {
            province.stateName = state.name;
            return state;
          });
          return state;
        })
        .map((state) => state.provinces)
        .reduce(function (a, b) {
          
          return a.concat(b);
        });

      
      setFilteredStates(filtered);
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
        // style={{ width: 500 }}
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
