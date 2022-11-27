import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import ethLogo from "../public/img/eth.svg";
import deliveryLogo from "../public/img/delivery.svg";
import dataLogo from "../public/img/data.svg";
import computerLogo from "../public/img/computer.svg";
import monitorLogo from "../public/img/monitor.svg";
import gearsLogo from "../public/img/gears.svg";
import dataGraphLogo from "../public/img/dataGraph.svg";
import Typewriter from "typewriter-effect";

import WaveLine from "./WaveLine";
import WaveLineTwo from "./WaveLineTwo";
import Terminal from "./Terminal";
import CodeBracket from "./CodeBracket";

import { useInView } from "react-intersection-observer";

import { useRef, useEffect, useState } from "react";

export default function Home() {
  const { ref: projectSectionRef, inView: projectSectionVisable } = useInView();
  const { ref: aboutSectionRef, inView: aboutSectionVisable } = useInView();

  // const myRef = useRef();
  // const [scrollSectionVisable, setScrollSectionVisable] = useState();
  // console.log('scrollSectionVisable', scrollSectionVisable);

  // useEffect(() => {
  //   console.log("myRef", myRef.current);
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setScrollSectionVisable(entry.isIntersecting);
  //     console.log("entry", entry);
  //   });
  //   observer.observe(myRef.current);
  // }, []);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="snap-y h-screen w-screen overflow-scroll">
        {/* NavBar START*/}
        <motion.nav
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
          className="snap-start text-neutral-200 bg-black p-8 flex justify-between select-none md:p-12 md:mb-0"
        >
          <h1 className="text-l md:text-2xl">
            <Typewriter
              options={{
                strings: [".code()", ".data()", ".automate()"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          {/* <ul className="flex items-center cusor-pointer text-m md:text-xl">
            <li className="hover:scale-110 duration-100 py-1 hover:text-orange-100">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:scale-110 duration-100 py-1 hover:text-orange-100">
              <Link className="ml-8" href="/about">
                About Me
              </Link>
            </li>
            <li className="hover:scale-110 duration-100 py-1 hover:text-orange-100">
              <Link className="ml-8" href="/projects">
                Projects
              </Link>
            </li>
          </ul> */}
        </motion.nav>
        {/* NavBar END*/}

        {/* HomeLandingSection START*/}
        <div className="bg-black">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.6,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.6,
                },
              },
            }}
            className="text-neutral-100 text-center p-10 md:px-20 lg:px-40"
          >
            <h2 className="text-3xl py-2 section-one-header md:text-5xl">
              Leche Labs
            </h2>
            <h3 className="text-l italic py-2 section-one-header max-w-xl mx-auto md:text-2xl">
              Designer and Developer
            </h3>
            <WaveLineTwo />
            <div className="flex pt-5">
              <Image
                className="mx-auto pt-5 w-1/6 md:w-2/12"
                src={monitorLogo}
              />
              <Image
                className="mx-auto pt-5 w-1/6 md:w-2/12"
                src={dataGraphLogo}
              />
              <Image className="mx-auto pt-5 w-1/6 md:w-2/12" src={gearsLogo} />
            </div>
            {/* <p>
              {projectSectionVisable ? "I SEE YOU --> PROJECT TITLE" : "NO"}
            </p>
            <p>{aboutSectionVisable ? "I SEE YOU --> ABOUT ME TITLE" : "NO"}</p> */}
          </motion.div>
        </div>
        {/* HomeLandingSection END*/}

        {/* SectionOne START*/}
        <div className="snap-start bg-amber-200 justify-center p-10 section-one-header md:px-20 lg:px-30">
          <div>
            <motion.h2
              ref={aboutSectionRef}
              className="text-3xl mb-5 md:text-5xl flex gap-3"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
            >
              <Terminal />
              About Me
            </motion.h2>
            {/* <p>{aboutSectionVisable ? "BING-BONG" : "NO"}</p> */}
            <motion.p
              className="text-l py-2 section-one-header max-w-xl md:text-2xl"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
            >
              Hey! I'm Leche, a software developer, web3 advocate, and a
              everyday student to life. I started out my love for tech young as
              I probed through anything that had advanced settings
              configurations. I had no idea what I was doing at the time, but
              that same curosity has driven my quest for knowledge.
              <br />
              <br />
              <br />
              A majority of my software development experience comes from a
              large financial services corporation, where for 6 years I lead,
              developed and supported various applications as a hybrid software/data
              engineer.
              <br />
              <br />
              <br />
              Currently, I am Fun-employed and open to opportunities. In the
              meantime, I'll continue to build and dive down the web3 rabbit
              hole.
            </motion.p>
          </div>
        </div>
        {/* SectionOne END*/}

        {/* SectionTwo START*/}
        <div className="snap-start text-neutral-200 bg-neutral-800 justify-center p-10 section-one-header md:px-20 lg:px-30">
          <motion.h2
            ref={projectSectionRef}
            className="text-3xl mb-5 md:text-5xl flex gap-3"
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
          >
            <CodeBracket />
            Projects
          </motion.h2>
          <motion.p
            className="text-l py-2 section-one-header max-w-xl md:text-2xl"
            initial={{ opacity: 0.0 }}
            whileInView={{ opacity: 1 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>
          {/* <p>{scrollSectionVisable ? "BING-BONG" : "NO"}</p>
          
          <p ref={iconRef}>
            <Image className={`${iconIsVisible ? styles.animateRocketIcon : ''}`} src={rocketLogo} width={25} height={25} />
          </p> */}

          <div className="md:grid grid-cols-2 gap-5">
            {/* card 1 */}
            <motion.div
              className="text-center shadow-lg p-10 rounded-xl max-w-lg mx-auto"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                position: "relative",
                zIndex: 1,
                background: "transparent",
                scale: [1, 1.1],
                rotate: [0, 2, 1, 0],
                filter: [
                  "hue-rotate(0) contrast(100%)",
                  "hue-rotate(360deg) contrast(200%)",
                  "hue-rotate(45deg) contrast(300%)",
                  "hue-rotate(0) contrast(100%)",
                ],
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Image className="mx-auto" src={ethLogo} width={25} height={25} />
              <h3 className="text-lg font-medium pt-5 pb-2">
                Ethereum Wallet App
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* card 2 */}
            <motion.div
              className="text-center shadow-lg p-10 rounded-xl max-w-lg mx-auto"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                position: "relative",
                zIndex: 1,
                background: "transparent",
                scale: [1, 1.1],
                rotate: [0, 2, 1, 0],
                filter: [
                  "hue-rotate(0) contrast(100%)",
                  "hue-rotate(360deg) contrast(200%)",
                  "hue-rotate(45deg) contrast(300%)",
                  "hue-rotate(0) contrast(100%)",
                ],
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Image
                className="mx-auto"
                src={deliveryLogo}
                width={25}
                height={25}
              />
              <h3 className="text-lg font-medium pt-5 pb-2">
                Omnia Delivery App
              </h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* card 3 */}
            <motion.div
              className="text-center shadow-lg p-10 rounded-xl max-w-lg mx-auto"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                position: "relative",
                zIndex: 1,
                background: "transparent",
                scale: [1, 1.1],
                rotate: [0, 2, 1, 0],
                filter: [
                  "hue-rotate(0) contrast(100%)",
                  "hue-rotate(360deg) contrast(200%)",
                  "hue-rotate(45deg) contrast(300%)",
                  "hue-rotate(0) contrast(100%)",
                ],
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Image
                className="mx-auto"
                src={dataLogo}
                width={25}
                height={25}
              />
              <h3 className="text-lg font-medium pt-5 pb-2">Datakata</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* card 4 */}
            <motion.div
              className="text-center shadow-lg p-10 rounded-xl max-w-lg mx-auto"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                position: "relative",
                zIndex: 1,
                background: "transparent",
                scale: [1, 1.1],
                rotate: [0, 2, 1, 0],
                filter: [
                  "hue-rotate(0) contrast(100%)",
                  "hue-rotate(360deg) contrast(200%)",
                  "hue-rotate(45deg) contrast(300%)",
                  "hue-rotate(0) contrast(100%)",
                ],
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <Image
                className="mx-auto"
                src={computerLogo}
                width={25}
                height={25}
              />
              <h3 className="text-lg font-medium pt-5 pb-2">[REDACTED]</h3>
              <p className="py-2">
                Something building in the background. Probably nothing.
              </p>
            </motion.div>
          </div>
          <footer className="text-center mt-10">
            <h1>Made with Love by Leche</h1>
            <h1>Made with Love by Leche</h1>
            <h1>Made with Love by Leche</h1>
          </footer>
        </div>
      </main>
    </div>
  );
}
