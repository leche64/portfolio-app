import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const AnimateSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55 ,1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    //   backgroundColor: ["hsl(0, 100, 50)", "hsl(-120, 100, 50)"],
    });
    setIsPlaying(true);
  };

  return (
    // <motion.span className="inline-block" whileHover={{ scale: 1.5 }}>
    <motion.span
      className="inline-block"
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) rubberBand();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
    >
    </motion.span>
  );
};

export default AnimateSpan;
