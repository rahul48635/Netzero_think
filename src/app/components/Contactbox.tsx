"use client";
import { AnimatePresence, motion } from "framer-motion";
import { LuMessageSquareText } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export const Contactbox = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className=" dark:bg-transparent relative">
      <AnimatePresence>{visible && <ChatBox />}</AnimatePresence>

      <motion.button
        layout
        onClick={() => setVisible(!visible)}
        className="bg-blue-600 p-4 rounded-full shadow-lg text-white"
        whileTap={{ scale: 1.1 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {visible ? (
            <motion.span
              key="chevron"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <FaChevronDown size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <LuMessageSquareText size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

const ChatBox = () => {
  const whatsappNumber = "918240615694";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, transformOrigin: "bottom right" }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5,ease:"easeInOut" }}
      className="w-80 h-[30rem] bg-white dark:bg-black shadow-xl rounded-2xl p-4 flex flex-col absolute bottom-20 right-0 z-100"
    >
      <div className="text-lg font-semibold mb-2 border-b pb-2">
        💬 Chat with us on
      </div>


      <div className="flex flex-col max-h-full items-center justify-around gap-5">
        <motion.button
          className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm cursor-pointer w-full"
          whileTap={{ scale: 1.2 }}
          onClick={()=>window.open(`https://wa.me/${whatsappNumber}`)}
        >
          WhatsApp
        </motion.button>
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm cursor-pointer w-full"
          whileTap={{ scale: 1.2 }}
          onClick={()=>window.open("https://www.facebook.com/p/NET-ZERO-THINK-100078446962916/?paipv=0&eav=AfbufXp8uGtISCG_iy2czsdtQ26X2s_mPiSk8kf5sPQoy09ZH2yUGQvIi02y_AzhYFU&_rdr")}
        >
          FaceBook
        </motion.button>
        <motion.button
          className="bg-green-800 text-white px-4 py-2 rounded-xl text-sm cursor-pointer w-full"
          whileTap={{ scale: 1.2 }}
          onClick={()=>window.open(`mailto:support@netzerothink.com?subject=New Service Request from [Name]&body=Name: [Name]%0APhone: [WhatsApp Number]%0AOrganistion: [Your Org]%0ADesignation: [Your Designation]%0ALinkedIn: [Link]%0ADescription: [Why do you want to Join?]`)}

        >
          Join Our Community
        </motion.button>
        {/* <motion.button
          className="bg-pink-600 text-white px-4 py-2 rounded-xl text-sm cursor-pointer w-full"
          whileTap={{ scale: 1.2 }}
          onClick={()=>window.open("https://www.instagram.com/netzerothink_india/")}
        >
          Instagram
        </motion.button> */}
        <motion.button
          className="bg-blue-700 text-white px-4 py-2 rounded-xl text-sm cursor-pointer w-full"
          whileTap={{ scale: 1.2 }}
          onClick={()=>window.open("https://www.linkedin.com/company/net-zero-think/")}
        >
          LinkedIn
        </motion.button>
      </div>
    </motion.div>
  );
};
