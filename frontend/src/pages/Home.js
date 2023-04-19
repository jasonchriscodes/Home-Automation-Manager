import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import Toogle from "./../components/Toggle";
import { useTheme } from "@mui/material";
import { tokens } from "./../theme";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  const handleMouseEnter1 = () => {
    setHover1(true);
  };

  const handleMouseLeave1 = () => {
    setHover1(false);
  };
  const handleMouseEnter2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };
  const handleMouseEnter3 = () => {
    setHover3(true);
  };

  const handleMouseLeave3 = () => {
    setHover3(false);
  };
  const handleMouseEnter4 = () => {
    setHover4(true);
  };

  const handleMouseLeave4 = () => {
    setHover4(false);
  };
  return (
    <div className="h-screen grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 pb-20">
      <div
        className="icon h-17 flex flex-col justify-center items-center px-4 shadow-md -z-1 gap-10"
        style={{
          backgroundColor: hover1
            ? `${colors.blueAccent[900]}`
            : `${colors.white[400]}`,
        }}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <Link to="/rooms/bedroom">
          <div className="flex space-x-12 items-center">
            <div className="flex-col mr-10">
              <h1
                className="text-4xl"
                style={{ color: `${colors.white[900]}` }}
              >
                Bed Room
              </h1>
              <h3 className="text-xl" style={{ color: `${colors.white[900]}` }}>
                4 / 6 devices ON
              </h3>
            </div>
            <FontAwesomeIcon
              icon={faBed}
              fontSize={100}
              style={{ color: `${colors.white[900]}` }}
            />
          </div>
        </Link>
        <Toogle className="z-10" />
      </div>
      <div
        className="icon h-17 flex flex-col justify-center items-center px-4 shadow-md -z-1 gap-10"
        style={{
          backgroundColor: hover2
            ? `${colors.blueAccent[900]}`
            : `${colors.white[400]}`,
        }}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <Link to="/rooms/kitchen">
          <div className="flex space-x-12 items-center">
            <div className="flex-col mr-10">
              <h1
                className="text-4xl"
                style={{ color: `${colors.white[900]}` }}
              >
                Kitchen
              </h1>
              <h3 className="text-xl" style={{ color: `${colors.white[900]}` }}>
                3 / 4 devices ON
              </h3>
            </div>
            <FontAwesomeIcon
              icon={faKitchenSet}
              fontSize={100}
              style={{ color: `${colors.white[900]}` }}
            />
          </div>
        </Link>
        <Toogle className="z-10" />
      </div>
      <div
        className="icon h-17 flex flex-col justify-center items-center px-4 shadow-md -z-1 gap-10"
        style={{
          backgroundColor: hover3
            ? `${colors.blueAccent[900]}`
            : `${colors.white[400]}`,
        }}
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
      >
        <Link to="/rooms/livingroom">
          <div className="flex space-x-12 items-center">
            <div className="flex-col mr-10">
              <h1
                className="text-4xl"
                style={{ color: `${colors.white[900]}` }}
              >
                Living Room
              </h1>
              <h3 className="text-xl" style={{ color: `${colors.white[900]}` }}>
                0 / 4 devices ON
              </h3>
            </div>
            <FontAwesomeIcon
              icon={faCouch}
              fontSize={100}
              style={{ color: `${colors.white[900]}` }}
            />
          </div>
        </Link>
        <Toogle className="z-10" />
      </div>
      <div
        className="icon h-17 flex flex-col justify-center items-center px-4 shadow-md -z-1 gap-10"
        style={{
          backgroundColor: hover4
            ? `${colors.blueAccent[900]}`
            : `${colors.white[400]}`,
        }}
        onMouseEnter={handleMouseEnter4}
        onMouseLeave={handleMouseLeave4}
      >
        <Link to="/rooms/office">
          <div className="flex space-x-12 items-center">
            <div className="flex-col mr-10">
              <h1
                className="text-4xl"
                style={{ color: `${colors.white[900]}` }}
              >
                Office
              </h1>
              <h3 className="text-xl" style={{ color: `${colors.white[900]}` }}>
                2 / 3 devices ON
              </h3>
            </div>
            <FontAwesomeIcon
              icon={faLaptop}
              fontSize={100}
              style={{ color: `${colors.white[900]}` }}
            />
          </div>
        </Link>
        <Toogle className="z-10" />
      </div>
    </div>
  );
};

export default Home;
