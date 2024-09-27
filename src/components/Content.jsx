/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Content = ({ sidebaropen,mode }) => {
  return (
    <motion.div
      animate={{ width: sidebaropen ? "85%" : "95%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${mode == "dark" ? "bg-[#080E28]" : "bg-[#E6E8EB]"} rounded-lg h-[95vh]`}
    >
      {/* Content goes here */}
    </motion.div>
  );
};

export default Content;
