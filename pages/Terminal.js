import { motion } from "framer-motion";

const Terminal = () => {
  return (
    <svg
      width="50"
      height="40"
      viewBox="0 0 50 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M5 35H45V10H5V35ZM25 27.5H40V32.5H25V27.5ZM10.225 16.025L13.75 12.5L23.75 22.5L13.75 32.5L10.225 28.975L16.675 22.5L10.225 16.025Z"
        fill="black"
      />
      <path d="M25 27.5H40V32.5H25V27.5Z" fill="black" />
      <path
        d="M45 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V35C0 36.3261 0.526784 37.5979 1.46447 38.5355C2.40215 39.4732 3.67392 40 5 40H45C47.75 40 50 37.75 50 35V5C50 3.67392 49.4732 2.40215 48.5355 1.46447C47.5979 0.526784 46.3261 0 45 0V0ZM45 35H5V10H45V35Z"
        fill="black"
      />
    </svg>
  );
};

export default Terminal;
