import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker orientation="landscape" />
    </LocalizationProvider>
  );
};

export default Calendar;
