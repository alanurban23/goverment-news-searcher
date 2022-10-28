import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { states } from "../data/States";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const statesOptions = [
  {
    key: "wszystkie",
    name: "Wszystkie"
  },
  ...states
];

export const States = ({ setSelectedStates }: any) => {
  // console.log(StatesOptions);

  return (
    <>
      <Autocomplete
        multiple
        id="states"
        options={statesOptions}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        onChange={(_event, value) => setSelectedStates(value)}
        renderOption={(props, option, { selected }) => (
          <>
            {option.key === 'wszystkie' ?
              <li {...props}>
                <Checkbox
                  icon={icon}
                  color="error"
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                <span style={{fontWeight: 'bold'}}>{option.name}</span>
              </li>
              :
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.name}
              </li>
            }
          </>
        )}
        // style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Wybierz województwa"
            placeholder="Wybierz województwa..."
          />
        )}
      />
    </>
  );
};
