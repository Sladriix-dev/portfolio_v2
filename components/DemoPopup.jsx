import { useState } from "react";
import YouTube from "react-youtube";
import { CrossIcon } from "./Icons";
import { motion } from "framer-motion";

const Popup = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 100,
    transition: {
      duration: 1,
    },
  },
};

const DemoPopup = ({ videoId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const opts = {
    height: "720",
    width: "1280",
    playerVars: {
      autoplay: 1,
    },
  };

  if (showPopup === false) {
    return (
      <div>
        <button
          className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          onClick={() => handleOpenPopup()}
        >
          Voir la démo
        </button>
      </div>
    );
  } else {
    return (
      <>
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-zinc-700 flex justify-center items-center bg-opacity-80 backdrop-blur-sm z-50"
          variants={Popup}
          initial="initial"
          animate="animate"
        >
          <button
            className="fixed top-8 left-8 font-bold bg-transparent border-none text-base cursor-pointer"
            onClick={() => handleClosePopup()}
          >
            <CrossIcon />
          </button>
          <YouTube opts={opts} videoId={videoId} />
        </motion.div>
      </>
    );
  }
};

export default DemoPopup;
