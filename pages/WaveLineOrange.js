import { motion } from "framer-motion";

const WaveOrange = () => {
  return (
    // <svg viewBox="0 0 1352 994" fill="none" xmlns="http://www.w3.org/2000/svg">
    //   <motion.path
    //     d="M1205.53 22.7081C1129.09 65.5153 955.211 219.358 871.198 492.247C766.18 833.361 493.033 905.223 245.106 868.032C46.7647 838.281 1.20495 820.041 3.21778 814.64"
    //     stroke="#4DC623"
    //     initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
    //     animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
    //     transition={{ duration: 2, ease: 'easeInOut' }}
    //   />
    // </svg>
    <svg id="waveLineOrangeSvg"viewBox="0 0 1283 902" fill="none">
      <motion.path
        d="M22 5.5L1278 297L5 884.5L967 897L279.5 339.5L1043.5 24.5L1248 788.5L535 863"
        stroke="#FAB45A"
        stroke-width="10"
        stroke-linecap="round"
        stroke-linejoin="round"
        initial={{ opacity: 0, pathLength: 0, pathOffset: 1 }}
        animate={{ opacity: 1, pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default WaveOrange;
