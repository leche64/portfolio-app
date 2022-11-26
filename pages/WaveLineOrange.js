import { motion } from "framer-motion";

const WaveOrange = () => {
  return (
    <svg viewBox="0 0 1352 994" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M1205.53 22.7081C1129.09 65.5153 955.211 219.358 871.198 492.247C766.18 833.361 493.033 905.223 245.106 868.032C46.7647 838.281 1.20495 820.041 3.21778 814.64"
        stroke="#4DC623"
        initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
        animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
    </svg>
  );
};

export default WaveOrange;
