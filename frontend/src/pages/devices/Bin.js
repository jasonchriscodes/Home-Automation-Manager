import Switch from "./../../components/Switch";
import Calendar from "../../components/Calendar";

const Bin = () => {
  return (
    <div className="p-4 shadow-md flex flex-wrap flex-col justify-between bg-white">
      <div className="flex-col">
        <div className="flex items-start flex-row justify-between p-3">
          <h1>Bin</h1>
          <Switch />
        </div>
        <div className="flex items-start flex-row justify-center p-3">
          <h1>Set time for scrap collections</h1>
        </div>
      </div>
      <div className="flex-col">
        <div className="flex items-start flex-row justify-center p-3 gap-12">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Bin;
