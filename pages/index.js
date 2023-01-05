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
import robotHeadLogo from "../public/img/robotHeadIcon.svg";

import Typewriter from "typewriter-effect";

import WaveLineGray from "./WaveLineGray";
import Terminal from "./Terminal";
import CodeBracket from "./CodeBracket";
import Clock from "./Clock";

import computerAboutMe from "../public/img/compOverlooking.svg";
import owlCoding from "../public/img/owlCoding.svg";

import { Analytics } from "@vercel/analytics/react";

import { FiTwitter, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import { useInView } from "react-intersection-observer";

import { useRef, useEffect, useState } from "react";

export default function Home() {
  const { ref: homeLandingSectionRef, inView: homeLandingSectionVisable } =
    useInView();
  const { ref: aboutSectionRef, inView: aboutSectionVisable } = useInView();
  const { ref: projectSectionRef, inView: projectSectionVisable } = useInView();

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHour] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Jan 22, 2023").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHour(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  // console.log(homeLandingSectionVisable, aboutSectionVisable, projectSectionVisable);

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
    <div>
      <Head>
        <title>Loc Nguyen</title>
        <meta name="description" content="AYO" />
        <link rel="icon" href="/img/computer.svg" />
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

      <div className="appContainer">
        <div className="navBarContainer">
          <div className="appNavBar fixed left-0 w-fit p-2 z-10">
            <div class="mx-auto h-[10rem] w-[1px] bg-neutral-100 mb-5"></div>
            <div className="navBarIcons text-xl text-neutral-300 flex flex-col space-y-4">
              <motion.span
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: [1, 1.25],
                  rotate: [0, 15, 5, -15, 0],
                  transition: {
                    duration: 0.2,
                  },
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                    },
                  },
                }}
              >
                <FiLinkedin className="cursor-pointer hover:text-green-200" />
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: [1, 1.25],
                  rotate: [0, 15, 5, -15, 0],
                  transition: {
                    duration: 0.2,
                  },
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 1.0,
                    },
                  },
                }}
              >
                <FiGithub className="cursor-pointer hover:text-green-200" />
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: [1, 1.25],
                  rotate: [0, 15, 5, -15, 0],
                  transition: {
                    duration: 0.2,
                  },
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 1.2,
                    },
                  },
                }}
              >
                <FiTwitter className="cursor-pointer hover:text-green-200" />
              </motion.span>
              <motion.span
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: [1, 1.25],
                  rotate: [0, 15, 5, -15, 0],
                  transition: {
                    duration: 0.2,
                  },
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 1.5,
                    },
                  },
                }}
              >
                <FiMail className="cursor-pointer hover:text-green-200" />
              </motion.span>
            </div>
            <div class="mx-auto h-[10rem] w-[1px] bg-neutral-100 mt-5"></div>
          </div>
        </div>

        <div className="appPageOne max-h-screen min-h-screen min-w-sm max-w-screen bg-[url('/img/abstract_tech_mobile.png')] sm:bg-[url('/img/abstract_tech_full.png')] bg-no-repeat bg-center bg-cover relative">
          <div className="w-full sm:w-[30rem] sm:pl-[5rem]">
            <div className="homeHeader pt-[10rem] text-center sm:text-left text-neutral-100">
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.15,
                    },
                  },
                }}
                className="text-4xl font-semibold sm:text-4xl sm:pt-10"
              >
                Loc Nguyen
              </motion.span>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.25,
                    },
                  },
                }}
                className="text-xl pt-2 sm:text-2xl"
              >
                Full stack developer <br className="sm:hidden" /> based out of
                NYC <br /> building apps for the web
              </motion.p>
            </div>
          </div>
          <div className="homeFooter w-full absolute bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8 mx-auto mb-10 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        {/* Page Two Start */}
        <div className="appPageTwo h-fit bg-[#130D23] p-10 w-full">
          <div className="aboutContainer max-w-5xl mx-auto">
            <div className="aboutHeaderContainer flex gap-3 p-2 sm:p-5">
              <Terminal />
              <p className="text-3xl font-semibold text-neutral-100 mt-2">
                About Me
              </p>
            </div>
            <div className="aboutContainer text-neutral-100 p-2 sm:p-5 grid sm:grid-cols-4">
              <div className="sm:col-span-2">
                <p className="text-lg sm:text-xl sm:max-w-lg sm:pt-2">
                  Hey! I'm Loc, a full-stack software engineer in New York City
                  with a love for code, data, and analytics. My passion for tech
                  started young from building apps scraping web data,
                  progressing to apps interacting with the Ethereum blockchain
                  and even award-winning data transformation pipelines.
                </p>
              </div>
              <div className="sm:col-span-2">
                <Image
                  className="rounded-xl max-w-sm mx-auto pt-5"
                  src={computerAboutMe}
                />
              </div>
              <div className="sm:col-span-2">
                <div className="py-4">
                  <Image className="mx-auto hidden sm:inline" src={owlCoding} />
                </div>
              </div>
              <div className="sm:col-span-2 pt-2">
                <p className="text-lg sm:text-xl">
                  A majority of my professional software development experience
                  comes from a large{" "}
                  <a
                    className="italic underline underline-offset-2 hover:underline-offset-4"
                    href="https://www.capitalone.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    financial services corporation
                  </a>
                  , where for 6 years I lead, developed, and supported various
                  applications as a hybrid software/data engineer.
                </p>
                <br />
                <p className="text-lg sm:text-xl">
                  Selected into their Technology Development Program, I focused
                  my time on leveraging open-sourced, cloud-based tech to
                  streamline legacy on-prem applications.
                </p>
                <Image
                  className="mx-auto py-2 sm:hidden max-h-[15rem]"
                  src={owlCoding}
                />
                <p className="text-lg sm:text-xl sm:pt-5 max-w-lg">
                  I've since left that position and am currently exploring the
                  world of freelancing and web3. My inbox is always open to any
                  new opportunities, questions, or if you just want to say hi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page Three Start */}
        <div className="appPageThree h-fit bg-[#1F2A49] p-10 w-full text-white">
          <div className="projectsContainer max-w-5xl mx-auto">
            <div className="projectHeaderContainer flex gap-3 p-2 sm:p-5">
              <CodeBracket />
              <p className="text-3xl font-semibold text-neutral-100 mt-2">
                Projects
              </p>
            </div>
            <div className="p-2">
              <p className="text-lg sm:text-xl text-neutral-100 py-2 section-one-header max-w-xl md:text-2xl">
                Below are a few favorite projects I&apos;ve worked on in the
                past, both from my professional and personal collections. A mix
                of complexity, touching various languages{" "}
                <span className="italic underline underline-offset-2">
                  (Python, Java, Scala){" "}
                </span>
                and frameworks/tech{" "}
                <span className="italic underline underline-offset-2">
                  {" "}
                  (Node, React, Flask, Spark, Hadoop, AWS, Docker)
                </span>
              </p>

              <div className="sm:grid grid-cols-2 gap-5">
                {/* card 1 */}
                <motion.div
                  className="text-center shadow-lg p-10 rounded-xl min-w-fit sm:col-span-2"
                  initial={{ opacity: 0.0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: [1, 1.08],
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <Image
                    className="mx-auto select-none"
                    src={robotHeadLogo}
                    width={25}
                    height={25}
                  />
                  <p className="text-lg sm:text-2xl font-bold pt-5 pb-2">
                    Atlas
                  </p>
                  <p className="py-2 sm:text-xl">
                    A smart AI assistant built to answer any questions at
                    anytime, powered by similar models used for{" "}
                    <span className="italic font-semibold">ChatGBT</span>. A
                    side project where I've used React, Node, and various APIs
                    to build a service that's similar to{" "}
                    <span className="italic font-semibold">ChatGBT</span> but
                    has a more unique, refined model for custom responses. A fun
                    project that has led me down the rabbit hole of AI.
                  </p>
                </motion.div>

                {/* card 1 */}
                <motion.div
                  className="text-center shadow-lg p-10 rounded-xl min-w-fit"
                  initial={{ opacity: 0.0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: [1, 1.08],
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <Image
                    className="mx-auto select-none"
                    src={dataLogo}
                    width={25}
                    height={25}
                  />
                  <p className="text-lg sm:text-2xl font-bold pt-5 pb-2">
                    Datakata
                  </p>
                  <p className="sm:text-xl py-2">
                    A complex data transformation pipeline containing various
                    microservices to extract, transform and load large
                    quantities of data. A challenging and rewarding project from
                    my professional career that helped significantly reduce cost
                    and time, replacing a deeply rooted legacy data application,
                    awarded &quot;TechXellence&quot;.
                  </p>
                </motion.div>

                {/* card 2 */}
                <motion.div
                  className="text-center shadow-lg p-10 rounded-xl min-w-fit"
                  initial={{ opacity: 0.0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: [1, 1.08],
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <Image
                    className="mx-auto select-none"
                    src={deliveryLogo}
                    width={25}
                    height={25}
                  />
                  <p className="text-lg sm:text-2xl font-bold pt-5 pb-2">
                    Omnia Delivery App
                  </p>
                  <p className="sm:text-xl py-2">
                    Web-based node application that allows geo-restricted orders
                    within a given area. Using various apis for backend services
                    (Google Maps, Twilio SMS Auth, Stripe Payments, etc). A
                    freelance project where I leveraged Figma and other tools to
                    complete the development cycle from design, prototype to
                    code.
                  </p>
                </motion.div>
                {/* card 3 */}
                <motion.div
                  className="text-center shadow-lg p-10 rounded-xl min-w-fit"
                  initial={{ opacity: 0.0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: [1, 1.08],
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <Image
                    className="mx-auto select-none"
                    src={ethLogo}
                    width={25}
                    height={25}
                  />
                  <p className="text-lg sm:text-2xl font-bold pt-5 pb-2">
                    Ethereum Wallet App
                  </p>
                  <p className="sm:text-xl py-2">
                    Python script that interacts with the Ethereum blockchain
                    via an Infura node to retrieve ETH to USD holdings given a
                    valid Ethereum address. Nothing complex, just something as I
                    dip my toes into web3.
                  </p>
                </motion.div>
                {/* card 4 */}
                <motion.div
                  className="text-center shadow-lg p-10 rounded-xl min-w-fit"
                  initial={{ opacity: 0.0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{
                    position: "relative",
                    zIndex: 1,
                    scale: [1, 1.08],
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <Image
                    className="mx-auto select-none"
                    src={computerLogo}
                    width={25}
                    height={25}
                  />
                  <p className="text-lg sm:text-2xl font-bold pt-5 pb-2">
                    [REDACTED]
                  </p>
                  <p className="sm:text-xl py-2">
                    Could be something. Probably nothing.
                  </p>
                  {/* Pass props to components */}
                  <Clock
                    timerDays={timerDays}
                    timerHours={timerHours}
                    timerMinutes={timerMinutes}
                    timerSeconds={timerSeconds}
                  />
                </motion.div>
              </div>
              <footer className="text-xs text-center mt-10 select-none">
                <h1>Made with Love by Loc</h1>
                <h1>Made with Love by Loc</h1>
                <h1>Made with Love by Loc</h1>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
