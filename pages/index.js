import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import testFoto from "../public/testFoto.jpg";
import MyProject_1_Logo from "../public/MyProject_1_Logo.jpeg";
import MyProject_2_Select from "../public/MyProject_2_Select.jpg";
import MyProject_3_GamePad from "../public/MyProject_3_GamePad.jpeg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>ÖNER SERHAT PORTFOLIO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbySero</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/Lebenslauf.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Öner Serhat
            </h2>
            <h3 className="text-2xl py-2">Software Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I am 25 years old and I am a Student at FH Hagenberg. I am
              studying "Mobile Computing" at 5 semester. I love developing cool
              Apps and Web Apps.
            </p>
          </div>
          <div className="text-5xl flex justigy-center gap-16 py-3 text-gray-600 ">
            <a href="https://github.com/Serhat403?tab=repositories">
              <AiFillGithub />
              <span className="visually-hidden">Github Profile</span>
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b w-80 h-80 mt-20">
            <Image src={testFoto} />
          </div>
          <div>
            <h3 className="text-3xl py-1">My Bachelor Project</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              For my Bachelor Project i have to develop a BattleBot which can be
              controlled from a smartphone. I developed a App which has a
              GameBoy Controller to controll the BattleBot. However I still have
              to code a GamePad which should have a graphical user interface for
              children. The children can use the graphical user interface to
              create their own GamePad.
            </p>
          </div>
          <div className="relative mx-auto  bg-gradient-to-b w-60 ">
            <Image src={MyProject_1_Logo} />
            <Image src={MyProject_2_Select} />
            <Image src={MyProject_3_GamePad} />
            <div className="lg:flex gap-10">
              <div className="text-center">
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Web Apps and Mobile Apps
                </h3>
                <p className="py-2">Creating cool Web Apps and Mobile Apps.</p>
                <h4 className="py-4 text-teal-600">Technologies I Use</h4>
                <p className="text-gray-800 py-1">React</p>
                <p className="text-gray-800 py-1">Tailwind</p>
                <p className="text-gray-800 py-1">Kotlin</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
