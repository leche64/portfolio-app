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

import WaveLineGray from "./WaveLineGray";
import Terminal from "./Terminal";
import CodeBracket from "./CodeBracket";
import Clock from "./Clock";

import computerAboutMe from "../public/img/compOverlooking.png";
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
              <FiLinkedin className="cursor-pointer hover:text-green-200" />
              <FiGithub className="cursor-pointer hover:text-green-200" />
              <FiTwitter className="cursor-pointer hover:text-green-200" />
              <FiMail className="cursor-pointer hover:text-green-200" />
            </div>
            <div class="mx-auto h-[10rem] w-[1px] bg-neutral-100 mt-5"></div>
          </div>
        </div>

        <div className="appPageOne max-h-screen min-h-screen min-w-sm max-w-screen bg-[url('/img/abstract_tech_mobile.png')] sm:bg-[url('/img/abstract_tech_full.png')] bg-no-repeat bg-center bg-cover relative">
          <div className="w-full sm:w-[30rem] sm:pl-[5rem]">
            <div className="homeHeader pt-[10rem] text-center sm:text-left text-neutral-100">
              <h1 className="text-2xl font-semibold sm:text-4xl sm:pt-10">
                Loc Nguyen
              </h1>
              <p className="text-lg pt-2 sm:text-2xl">
                Full stack developer <br className="sm:hidden" /> based out of
                NYC <br /> building apps for the web
              </p>
            </div>
          </div>
          <div className="homeFooter w-full absolute bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-8 h-8 mx-auto mb-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        <div className="appPageTwo min-h-screen h-fit bg-[#130D23] p-10">
          <div className="headerContainer flex gap-3 p-2">
            <Terminal />
            <p className="text-2xl font-semibold text-neutral-100 mt-2">
              About Me
            </p>
          </div>
          <div className="aboutContainer text-neutral-100 p-2">
            <p>
              Hey! I'm Loc, a full-stack software engineer in New York City with
              a love for code, data, and analytics. My passion for tech started
              young from building apps scraping web data, progressing to apps
              interacting with the Ethereum blockchain and even award-winning
              data transformation pipelines.
            </p>
            <div className="py-4">
              <Image className="rounded-xl" src={computerAboutMe} />
            </div>
            <p>
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
            <p>
              Selected into their Technology Development Program, I focused my
              time on leveraging open-sourced, cloud-based tech to streamline
              legacy on-prem applications.
            </p>
            <div className="py-4">
              <Image className="mx-auto" src={owlCoding} />
            </div>
            <p>
              I've since left that position and am currently exploring the world
              of freelancing and web3. My inbox is always open to any new
              opportunities, questions, or if you just want to say hi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
