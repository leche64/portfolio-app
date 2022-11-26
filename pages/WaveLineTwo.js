import { motion } from "framer-motion";

const WaveLineTwo = () => {
  return (
    <svg viewBox="0 0 1174 319" fill="none">
      <motion.path
        d="M80.0001 314C1205.5 314 -1147.29 229.5 1080.5 229.5C1623.5 229.5 -550 55 143 55C503 36.9999 974.5 81.9999 1171.5 5.49988"
        stroke="grey"
        strokeWidth="10"
        initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
        animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        whileInView={{ opacity: 1 }}
      />
    </svg>
  );
};

export default WaveLineTwo;
