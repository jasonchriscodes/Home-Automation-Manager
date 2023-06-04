import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { Popover, Transition } from "@headlessui/react";
import classNames from "classnames";
import { ColorModeContext, tokens } from "../../theme";
import { IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useInterval from "../../hooks/useInterval";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

const Header = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [doorStatus, setDoorStatus] = useState(false);
  const [gasStatus, setGasStatus] = useState(false);
  const [doorNotifications, setDoorNotifications] = useState([]);
  const [gasNotifications, setGasNotifications] = useState([]);
  let prevDoorStatus = useRef(false);
  let prevGasStatus = useRef(false);

  useEffect(() => {
    fetchDoorDevice();
    fetchGasDevice();
  }, []);

  useEffect(() => {
    if (doorNotifications.length > 0) {
      if (prevDoorStatus.current != doorStatus) {
        if (doorStatus == "open" || doorStatus == "close") {
          alertDoor();

          if (doorNotifications.length >= 5) {
            const notifications_ = [
              ...doorNotifications,
              { id: Date.now(), state: doorStatus },
            ].slice(-5);
            setDoorNotifications(notifications_);
          } else {
            setDoorNotifications([
              ...doorNotifications,
              { id: Date.now(), state: doorStatus },
            ]);
          }
        }
      } else {
        // console.log("Already notified");
      }
    }
    if (gasNotifications.length > 0) {
      if (prevGasStatus.current != gasStatus) {
        if (gasStatus == "open" || gasStatus == "close") {
          alertGas();

          if (gasNotifications.length >= 5) {
            const notifications_ = [
              ...gasNotifications,
              { id: Date.now(), state: gasStatus },
            ].slice(-5);
            setGasNotifications(notifications_);
          } else {
            setGasNotifications([
              ...gasNotifications,
              { id: Date.now(), state: gasStatus },
            ]);
          }
        }
      } else {
        // console.log("Already notified");
      }
    }
    if (doorNotifications.length <= 0) {
      if (doorStatus == "open" || doorStatus == "close") {
        alertDoor();

        setDoorNotifications([
          ...doorNotifications,
          { id: Date.now(), state: doorStatus },
        ]);
      }
    }
    if (gasNotifications.length <= 0) {
      if (gasStatus == "open" || gasStatus == "close") {
        alertGas();

        setGasNotifications([
          ...gasNotifications,
          { id: Date.now(), state: gasStatus },
        ]);
      }
    }

    prevDoorStatus.current = doorStatus;
    prevGasStatus.current = gasStatus;

    // console.log(notifications);
  }, [doorStatus, gasStatus]);

  const fetchDoorDevice = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/devices/6469d4bb077d45277bce9e50"
      );
      const responseData = await response.json();

      setDoorStatus(responseData.status === "on" ? "open" : "close");
    } catch (error) {
      console.log("fetchDoorDevice Error", error);
    }

    // ----------------------- Test Function -------------------------------
    // Generates Random door status
    // Note :- Comment this when using
    //----------------------------------------------------------------------

    // if(Math.random() > 0.7){

    //   if (doorStatus == 'open') {
    //     setDoorStatus('close');
    //   } else {
    //     setDoorStatus('open');
    //   }
    // }

    // ---------------------------------------------------------------------
  };

  const fetchGasDevice = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/devices/647bc059c9bca3e7d6fa3737"
      );
      const responseData = await response.json();

      setGasStatus(responseData.status === "on" ? "open" : "close");
    } catch (error) {
      console.log("fetchGasDevice Error", error);
    }

    // ----------------------- Test Function -------------------------------
    // Generates Random door status
    // Note :- Comment this when using
    //----------------------------------------------------------------------

    // if(Math.random() > 0.7){

    //   if (gasStatus == 'open') {
    //     setGasStatus('close');
    //   } else {
    //     setGasStatus('open');
    //   }
    // }

    // ---------------------------------------------------------------------
  };

  const pollFunction = async () => {
    // console.log(Date.now().toFixed(5) + " PollFunction");
    fetchDoorDevice();
    fetchGasDevice();
  };

  useInterval(pollFunction, 1000);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const alertDoor = async () => {
    if (doorStatus === "open") {
      await delay(180000);
      toast.error("The door is " + doorStatus, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // toast.success("The door is " + doorStatus, {
      //   position: "bottom-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
  };
  const alertGas = () => {
    if (gasStatus === "open") {
      delay(1000);
      toast.error("The gas is " + gasStatus, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      // toast.success("The gas is " + gasStatus, {
      //   position: "bottom-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    }
  };

  return (
    <div
      className="h-20 px-4 flex justify-between items-center border-b border-gray-200"
      style={{ backgroundColor: `${colors.primary[400]}` }}
    >
      <div className="max-w-5xl flex-1 mx-auto py-4">{title}</div>
      <div className="flex items-center gap-2 mr-2">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <IconButton>
                  <MessageOutlinedIcon />
                </IconButton>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm">
                      This is messages panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                // onClick={alert}
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <IconButton>
                  {doorNotifications.length || gasNotifications.length > 0 ? (
                    <NotificationsActiveOutlinedIcon />
                  ) : (
                    <NotificationsOutlinedIcon />
                  )}
                </IconButton>
              </Popover.Button>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notification
                    </strong>

                    {[...doorNotifications].reverse().map((item) => (
                      <div>
                        <div
                          key={item.id}
                          className="d-flex justify-content-between"
                        >
                          <a className="p-2"> Door is {item.state} </a>
                          <button
                            onClick={() => {
                              // console.log(item.id);
                              const filteredNotifications =
                                doorNotifications.filter(
                                  (i) => i.id != item.id
                                );
                              setDoorNotifications(filteredNotifications);
                            }}
                            className="btn-close p-2 text-red-700"
                          >
                            X
                          </button>
                        </div>
                        <h5 className="text-xs p-2">
                          {" "}
                          - {Math.round((Date.now() - item.id) / 1000)} Seconds
                          Ago{" "}
                        </h5>
                      </div>
                    ))}

                    {[...gasNotifications].reverse().map((item) => (
                      <div>
                        <div
                          key={item.id}
                          className="d-flex justify-content-between"
                        >
                          <a className="p-2"> Gas is {item.state} </a>
                          <button
                            onClick={() => {
                              // console.log(item.id);
                              const filteredNotifications =
                                gasNotifications.filter((i) => i.id != item.id);
                              setGasNotifications(filteredNotifications);
                            }}
                            className="btn-close p-2 text-red-700"
                          >
                            X
                          </button>
                        </div>
                        <h5 className="text-xs p-2">
                          {" "}
                          - {Math.round((Date.now() - item.id) / 1000)} Seconds
                          Ago{" "}
                        </h5>
                      </div>
                    ))}

                    {doorNotifications.length &&
                    gasNotifications.length == 0 ? (
                      <div className="mt-2 py-1 text-sm">
                        No new notifications
                      </div>
                    ) : (
                      <a></a>
                    )}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
