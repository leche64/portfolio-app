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

import AiLoop from "../public/img/00415.png";

import Typewriter from "typewriter-effect";

import WaveLineGray from "./WaveLineGray";
import Terminal from "./Terminal";
import CodeBracket from "./CodeBracket";
import Clock from "./Clock";

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
    const countDownDate = new Date("Jan 1, 2023").getTime();

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

      <div className="absolute text-xl text-neutral-300 flex flex-col space-y-5 p-3 left-0 top-40">
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: [1, 1.15, 1.25],
            rotate: [0, 15, 5, -15, 0],
            transition: {
              duration: 0.1,
            },
          }}
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
        >
          <a
            href="https://www.linkedin.com/in/loc-nguyen-nyc"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="cursor-pointer hover:text-green-200" />
          </a>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: [1, 1.15, 1.25],
            rotate: [0, 15, 5, -15, 0],
            transition: {
              duration: 0.1,
            },
          }}
          variants={{
            hidden: {
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.63,
              },
            },
          }}
        >
          <a href="https://github.com/leche64" target="_blank" rel="noreferrer">
            <FiGithub className="cursor-pointer hover:text-green-200" />
          </a>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: [1, 1.15, 1.25],
            rotate: [0, 15, 5, -15, 0],
            transition: {
              duration: 0.1,
            },
          }}
          variants={{
            hidden: {
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.66,
              },
            },
          }}
        >
          <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
            <FiTwitter className="cursor-pointer hover:text-green-200" />
          </a>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: [1, 1.15, 1.25],
            rotate: [0, 15, 5, -15, 0],
            transition: {
              duration: 0.1,
            },
          }}
          variants={{
            hidden: {
              scale: 0.6,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.66,
              },
            },
          }}
        >
          <a
            href="mailto:loc.nguyen@tutanota.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail className="cursor-pointer hover:text-green-200" />
          </a>
        </motion.div>
      </div>

      <main className="h-screen w-screen overflow-scroll tracking-wide">
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
          className="snap-start text-neutral-200 p-8 flex justify-between select-none md:p-12 md:mb-0"
        >
          <div className="text-l md:text-2xl">
            <Typewriter
              options={{
                strings: [".code()", ".data()", ".automate()"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </motion.nav>
        {/* NavBar END*/}

        {/* HomeLandingSection START*/}
        <div ref={homeLandingSectionRef}>
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
                  delay: 0.69,
                },
              },
            }}
            className="text-neutral-100 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-neutral-300 to-neutral-200 text-center p-10 select-none md:px-20 lg:px-40"
          >
            <h1 className="text-3xl py-2 section-one-header md:text-5xl">
              Loc Nguyen
            </h1>
            <h3 className="text-xl italic py-2 section-one-header max-w-xl mx-auto md:text-2xl">
              Full stack developer based out of NYC building apps for the web
            </h3>
            <WaveLineGray />
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

        {/* SectionOne START*/}
        <div className="snap-start bg-indigo-700 text-neutral-200 justify-center p-10 section-one-header md:px-20 lg:px-30">
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
              Hey! I&apos;m Loc, a full-stack software engineer with a love for
              code, data, and analytics. My passion for tech started young from
              building apps scraping web data, progressing to apps interacting
              with the Ethereum blockchain and even award-winning data
              transformation pipelines.
              <br />
            </motion.p>
            <motion.p
              className="text-l py-2 section-one-header max-w-xl md:text-2xl"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
            >
              <br />A majority of my professional software development
              experience comes from a large{" "}
              <a
                className="italic underline underline-offset-2 hover:underline-offset-4"
                href="https://www.capitalone.com/"
                target="_blank"
                rel="noreferrer"
              >
                financial services corporation
              </a>
              , where for 6 years I lead, developed, and supported various
              applications as a hybrid software/data engineer. Selected into
              their Technology Development Program, I focused my time on
              leveraging new technology to streamline legacy on-prem
              applications.
              <br />
              <br />
              <br />
              </motion.p>
            <motion.p
              className="text-l py-2 section-one-header max-w-xl md:text-2xl"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}>
              I&apos;ve since left that position and am currently exploring the
              world of freelancing and web3. My inbox is open to any new
              opportunities, questions, or if you just want to say hi.
            </motion.p>
          </div>
        </div>
        {/* SectionOne END*/}

        {/* SectionTwo START*/}
        <div className="text-neutral-200 bg-neutral-800 justify-center p-10 section-one-header md:px-20 lg:px-30">
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
            Below are a few favorite projects I&apos;ve worked on in the past,
            both from my professional and personal collections. A mix of
            complexity, touching various languages{" "}
            <span className="italic underline underline-offset-2">
              (Python, Java, Scala){" "}
            </span>
            and frameworks/tech{" "}
            <span className="italic underline underline-offset-2">
              {" "}
              (Node, React, Flask, Spark, Hadoop, AWS, Docker)
            </span>
          </motion.p>
          {/* <p>{scrollSectionVisable ? "BING-BONG" : "NO"}</p>
          
          <p ref={iconRef}>
            <Image className={`${iconIsVisible ? styles.animateRocketIcon : ''}`} src={rocketLogo} width={25} height={25} />
          </p> */}

          <div className="md:grid grid-cols-2 gap-5">
            {/* card 1 */}
            <motion.div
              className="text-center shadow-lg p-10 rounded-xl min-w-fit"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                scale: [1, 1.1],
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
                className="mx-auto select-none"
                src={dataLogo}
                width={25}
                height={25}
              />
              <h3 className="text-lg font-medium pt-5 pb-2">Datakata</h3>
              <p className="py-2">
                A complex data transformation pipeline containing various
                microservices to extract, transform and load large quantities of
                data. A challenging and rewarding project from my professional
                career that helped significantly reduce cost and time, replacing
                a deeply rooted legacy data application, awarded
                &quot;TechXellence&quot;.
              </p>
            </motion.div>

            {/* card 2 */}
            <motion.div
              className="text-center shadow-lg p-10 rounded-xl min-w-fit"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                scale: [1, 1.1],
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
                className="mx-auto select-none"
                src={deliveryLogo}
                width={25}
                height={25}
              />
              <h3 className="text-lg font-medium pt-5 pb-2">
                Omnia Delivery App
              </h3>
              <p className="py-2">
                Web-based node application that allows geo-restricted orders
                within a given area. Using various apis for backend services
                (Google Maps, Twilio SMS Auth, Stripe Payments, etc). A fun
                freelance project where I leveraged Figma and other tools to
                complete the development cycle from design, prototype to code.
              </p>
            </motion.div>
            {/* card 3 */}
            <motion.div
              className="text-center shadow-lg p-10 rounded-xl min-w-fit"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                scale: [1, 1.1],
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
                className="mx-auto select-none"
                src={ethLogo}
                width={25}
                height={25}
              />
              <h3 className="text-lg font-medium pt-5 pb-2">
                Ethereum Wallet App
              </h3>
              <p className="py-2">
                Python script that interacts with the Ethereum blockchain via an
                Infura node to retrieve ETH to USD holdings given a valid
                Ethereum address. Nothing complex, just something as I dip my
                toes into web3.
              </p>
            </motion.div>
            {/* card 4 */}
            <motion.div
              className="text-center shadow-lg p-10 rounded-xl min-w-fit"
              initial={{ opacity: 0.0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{
                scale: [1, 1.1],
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
                className="mx-auto select-none"
                src={computerLogo}
                width={25}
                height={25}
              />
              <h3 className="text-lg font-medium pt-5 pb-2">[REDACTED]</h3>
              <p className="py-2">Could be something. Probably nothing.</p>
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
      </main>
    </div>
  );
}
