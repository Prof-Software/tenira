/* eslint-disable react/prop-types */
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { motion } from "framer-motion";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const Sidebar = ({ sidebaropen, changeSidebar, mode, changeMode }) => {
  return (
    <motion.div
      animate={{ width: sidebaropen ? "15%" : "5%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex justify-between flex-col"
    >
      <div className="flex items-center justify-between">
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
            onClick={changeSidebar}
            className="text-2xl text-gray-400 cursor-pointer"
          />
        </motion.div>
      </div>
      <div className={`relative flex mb-5 mr-4 ${mode == "dark" ? "bg-[#1A2247]" : "bg-[#cccaca]"} rounded-xl ${sidebaropen ? "" : "hidden"}`}>
        
        {/* Sliding background */}
        <motion.div
          className="absolute top-0 left-0 h-full w-[50%] bg-[#3C52D9] rounded-xl"
          animate={{ x: mode === "dark" ? "100%" : "0%" }}  // Moves background left or right
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
