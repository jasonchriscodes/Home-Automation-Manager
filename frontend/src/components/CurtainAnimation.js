import { useState } from "react";

const imageFolder = "/assets";

function Effect() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const buttonText = isOpen ? "Close" : "Open";
  const gradientStart = isOpen
    ? "from-red-500 via-red-600 bg-pos-0"
    : "from-blue-800 via-blue-600 bg-pos-0";
  const gradientEnd = isOpen
    ? "to-red-400 bg-pos-100"
    : "to-blue-400 bg-pos-100";

  return (
    <div>
      <div className="bg-[url('https://res.cloudinary.com/jasoncloud13542/image/upload/v1681761339/beach_rospxl.jpg')] bg-contain bg-no-repeat bg-[center_top] rounded-lg shadow-lg relative w-96 h-56 flex justify-center items-center">
        <img
          src={`${imageFolder}/curtain1.jpg`}
          alt="Curtain 1"
          className={`absolute top-0 h-full left-0 w-1/2 transition-all duration-1000 ${
            isOpen ? "w-10" : ""
          }`}
        />
        <img
          src={`${imageFolder}/curtain2.jpg`}
          alt="Curtain 2"
          className={`absolute top-0 h-full right-0 w-1/2 transition-all duration-1000 ${
            isOpen ? "w-10" : ""
          }`}
        />
      </div>
      <div className="flex items-start flex-row justify-center p-3 gap-12">
        <button
          onClick={handleClick}
          className={`bg-gradient-to-r ${gradientStart} ${gradientEnd} text-white px-12 py-5 rounded-md transition-all duration-500`}
          style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="mx-auto">
        <Effect />
      </div>
    </div>
  );
}

export default App;
