import React, { useRef, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";
import { DayCalendarSkeleton } from "@mui/x-date-pickers";
import { Badge } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { red } from "@mui/material/colors";
import "./../App.css";

export default function StaticDateTimePickerLandscape() {
  const initialValue = dayjs("2022-04-17");
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([1, 16]);

  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !props.outsideCurrentMonth &&
      highlightedDays.indexOf(props.day.date()) >= 0;

    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={
          isSelected ? (
            <FiberManualRecordIcon sx={{ color: red[500], fontSize: 16 }} />
          ) : undefined
        }
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker
        className="shadow-md"
        orientation="portrait"
        defaultValue={initialValue}
        loading={isLoading}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}
