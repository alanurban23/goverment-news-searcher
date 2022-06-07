import { DatePicker, LocalizationProvider } from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterMoment";

import { TextField } from "@mui/material";
import { FC } from "react";

export interface DateRangeProps {
  label: string;
  onChangeDate: any;
  value: Date;
}

export const DateRange: FC<DateRangeProps> = ({
  label,
  value,
  onChangeDate,
}: DateRangeProps) => {
  return (
    <>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label={label}
          inputFormat="DD.MM.YYYY"
          mask="__.__.____"
          value={value}
          onChange={onChangeDate}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};
