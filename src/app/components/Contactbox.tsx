"use client";
import { AnimatePresence, motion } from "framer-motion";
import { LuMessageSquareText } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { useRef, useState } from "react";

export const Contactbox = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 dark:bg-transparent">
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
  const Ref = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleOnclick = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [...prev, input]);
      setInput("");
      if (Ref.current) Ref.current.value = "";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, transformOrigin: "bottom right" }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.25 }}
      className="w-80 h-[30rem] bg-white dark:bg-black  shadow-xl rounded-2xl p-4 flex flex-col absolute bottom-20 right-0"
    >
      <div className="text-lg font-semibold mb-2 border-b pb-2">
        💬 Chat with us
      </div>

      <div className="flex-1 overflow-y-auto mb-2 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="bg-blue-100 dark:bg-gray-500 p-2 rounded-lg w-fit max-w-[70%] self-end ml-auto"
          >
            {msg}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          ref={Ref}
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-xl text-sm focus:outline-none"
        />
        <motion.button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm cursor-pointer"
          disabled={input.trim() === ""}
          whileTap={{ scale: 1.2 }}
          onClick={handleOnclick}
        >
          Send
        </motion.button>
      </div>
    </motion.div>
  );
};
