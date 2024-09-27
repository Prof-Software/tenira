import { useState } from "react";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [sidebaropen, setSetsidebaropen] = useState(true)
  const [mode, setMode] = useState("dark")
  const changeSidebar = () => {
    setSetsidebaropen(!sidebaropen)
  }
  const changeMode = (newMode) => {
    // console.log('Changing mode to:', newMode);  // Debugging log
    setMode(newMode);
  };
  
  console.log(mode)
  return (
    <div className={`h-screen w-screen ${mode == "dark" ? "bg-[#101636]" : "bg-[#F5F5F5]"} overflow-hidden`}>
      <div className="p-6">
        <div className="flex w-full justify-between">
          <Sidebar changeMode={changeMode} mode={mode} changeSidebar={changeSidebar} sidebaropen={sidebaropen} />
          <Content mode={mode} sidebaropen={sidebaropen}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
