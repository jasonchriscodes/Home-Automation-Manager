import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";

export default function CheckBox({ defaultValue, toggleSwitch }) {
  const [checked, setChecked] = useState(defaultValue);
  useEffect(() => {
    setChecked(!defaultValue);
  }, []);

  const handleSwitch = (e) => {
    toggleSwitch(!defaultValue);
    setChecked(e.target.checked);
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <Checkbox checked={checked} onChange={handleSwitch} />
      </div>
    </div>
  );
}
