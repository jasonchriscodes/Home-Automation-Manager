import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

export default function CheckBox({ defaultValue, toggleSwitch, label }) {
  const handleCheckboxChange = (event) => {
    toggleSwitch(event.target.checked);
  };

  return (
    <div className="flex items-center">
      <label>
        <Checkbox
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          checked={defaultValue}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
}
