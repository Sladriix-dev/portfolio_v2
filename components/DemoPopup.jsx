import { useCallback, useEffect, useRef, useState } from "react";
import { CrossIcon } from "./Icons";
import { motion } from "framer-motion";

const DemoPopup = ({ videoId, autoPlay }) => {
  const [showPopup, setShowPopup] = useState(false);
  const videoURL = `https://www.youtube.com/embed/${videoId}${
    autoPlay ? "?autoplay=0" : ""
  }`;
  const iframeRef = useRef(null);
  const defaultHeight = 495;
  const [videoHeight, setVideoHeight] = useState(
    iframeRef.current ? iframeRef.current.offsetWidth * 0.5625 : defaultHeight
  );
  const handleChangeVideoWidth = useCallback(() => {
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    return setVideoHeight(Math.floor(height * ratio));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleChangeVideoWidth);
    const ratio =
      window.innerWidth > 990
        ? 1.0
        : window.innerWidth > 522
        ? 1.2
        : window.innerWidth > 400
        ? 1.45
        : 1.85;
    const height = iframeRef.current
      ? iframeRef.current.offsetWidth * 0.5625
      : defaultHeight;
    setVideoHeight(Math.floor(height * ratio));
    return function cleanup() {
      window.removeEventListener("resize", handleChangeVideoWidth);
    };
  }, [videoHeight, handleChangeVideoWidth]);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (showPopup === false) {
    return (
      <div>
        <button
          className="ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold border border-solid border-transparent hover:dark:border-light hover:dark:text-light hover:dark:bg-dark hover:border-dark hover:bg-light hover:text-dark smpopup:px-4 smpopup:text-base"
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
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-[102%] h-full flex flex-col z-30 items-center justify-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <button
            className="fixed top-8 left-8 font-bold bg-transparent border-none text-base cursor-pointer"
            onClick={() => handleClosePopup()}
          >
            <CrossIcon />
          </button>
          <iframe
            ref={iframeRef}
            width="80%"
            height={`${videoHeight}px`}
            src={videoURL}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </>
    );
  }
};

export default DemoPopup;
