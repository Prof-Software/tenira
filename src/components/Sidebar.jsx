/* eslint-disable react/prop-types */
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { motion } from "framer-motion";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdTipsAndUpdates } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown, IoIosSquare, IoIosAddCircle } from "react-icons/io";
const Sidebar = ({ sidebaropen, changeSidebar, mode, changeMode }) => {
  return (
    <motion.div
      animate={{ width: sidebaropen ? "20%" : "5%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex justify-between flex-col"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between ">
          {/* Logo and Title */}
          <div
            className={`${sidebaropen ? "w-[70px]" : "hidden"} flex items-center`}
          >
            <h1 className="font-bold text-white uppercase text-xl">
              <span className="text-[#3C52D9]">Te</span>
              <span className="text-[#2EF2FF]">ni</span>
              <span className="text-[#3C52D9]">ra</span>
            </h1>
          </div>
          {/* Toggle Button */}
          <motion.div
            animate={{ marginLeft: sidebaropen ? "10px" : "auto" }} // Animate button position
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mr-[30px]"
          >
            <VscLayoutSidebarLeft
              // onClick={changeSidebar}
              className="text-2xl text-gray-400 cursor-pointer"
            />
          </motion.div>
        </div>
        <div className="mt-[40px] mr-4">
          <div className="flex flex-col">
            <div className="flex items-center text-sm p-3 gap-4 cursor-pointer hover:bg-[#324679] rounded-lg hover:text-white">
              <AiFillProject className="text-[22px] text-blue-500" /> Tech
              Titans
            </div>
            <div className="flex items-center text-sm p-3 gap-4 cursor-pointer hover:bg-[#324679] rounded-lg hover:text-white">
              <FaMoneyCheckDollar className="text-[22px] text-purple-600" />{" "}
              Manage Subscription
            </div>
            <div className="flex items-center text-sm p-3 gap-4 cursor-pointer hover:bg-[#324679] rounded-lg hover:text-white">
              <MdTipsAndUpdates className="text-[22px] text-orange-500" />
              Updates and FAQ
            </div>
            <div className="flex items-center text-sm p-3 gap-4 cursor-pointer hover:bg-[#324679] rounded-lg hover:text-white">
              <CiSettings className="text-[22px] text-green-400" />
              Settings
            </div>
            <hr className=" mt-3 border-gray-700 rounded-md" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-sm p-3 justify-between cursor-pointer text-gray-500">
              <div className="flex gap-4">
                <IoIosArrowDown className="text-[22px]" />
                Teams
              </div>
              <IoIosAddCircle className="text-[22px]" />
            </div>
            <div className="overflow-y-auto h-[170px]">
              <div className="flex items-center text-sm p-3 gap-4 cursor-pointer hover:bg-[#324679] rounded-lg hover:text-white">
                <IoIosSquare className="text-[22px] text-purple-600" /> Manage
                Subscription
              </div>
              <div className="flex items-center text-sm p-3 gap-4 cursor-pointer hover:bg-[#324679] rounded-lg hover:text-white">
                <IoIosSquare className="text-[22px] text-orange-500" />
                Updates and FAQ
              </div>
              <div className="flex items-center text-sm p-3 gap-4 cursor-pointer hover:bg-[#324679] rounded-lg hover:text-white">
                <IoIosSquare className="text-[22px] text-green-400" />
                Settings
              </div>
            </div>
            <hr className=" mt-3 border-gray-700 rounded-md" />
          </div>
        </div>
      </div>
      <div className="bg-[#1A2247] mr-4 p-4 rounded-md shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">

          <FaUserCircle className="text-4xl"/>
          <div className="flex flex-col text-sm text-white">
            <h4>John Doe</h4>
            <p className="text-xs text-gray-500">Johndoe151@tenira.com</p>
          </div>
          </div>
          <div className="bg-[#C7EB7F] text-gray-800 px-2 rounded-md text-sm">Free</div>
        </div>
        <button className="w-full flex items-center justify-center mt-6 mr-4 p-3 border rounded-lg font-bold hover:bg-blue-800 transition-all border-blue-400">Upgrade to Pro</button>
      </div>
      <div
        className={`relative h-[60px] shadow-xl flex mb-5 mr-4 ${mode == "dark" ? "bg-[#1A2247]" : "bg-[#cccaca]"} rounded-xl ${sidebaropen ? "" : "hidden"}`}
      >
        {/* Sliding background */}
        <motion.div
          className="absolute top-0 left-0 h-[50px] mt-1 w-[48%] mx-1 bg-[#3C52D9] rounded-xl"
          animate={{ x: mode === "dark" ? "100%" : "0%" }} // Moves background left or right
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Light Mode Button */}
        <button
          onClick={() => changeMode("light")}
          className={`relative flex items-center w-[50%] justify-center gap-2 cursor-pointer p-3 z-10 ${
            mode === "light" ? "text-white" : "text-gray-500"
          }`}
        >
          {mode === "light" ? <MdLightMode /> : <MdOutlineLightMode />}
          Light
        </button>

        {/* Dark Mode Button */}
        <button
          onClick={() => changeMode("dark")}
          className={`relative flex items-center w-[50%] justify-center gap-2 cursor-pointer p-3 z-10 ${
            mode === "dark" ? "text-white" : "text-gray-500"
          }`}
        >
          {mode === "dark" ? <MdDarkMode /> : <MdOutlineDarkMode />}
          Dark
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
