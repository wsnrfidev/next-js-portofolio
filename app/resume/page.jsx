"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "As a programmer, I am a problem solver, innovator, and creator who turns ideas into reality through code. With a strong passion for technology and a commitment to excellence, I constantly push the boundaries of what's possible in software",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Wisnu Rafi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 085776153331",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years ",
    },
    {
      fieldName: "Nationallity",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "wsnfii60@gmail.com",
    },
    {
      fieldName: "Language",
      fieldValue: "Bahasa, English, Japanese",
    },
  ],
};

const experiences = {
  icon: "/asset/resune/badge.svg",
  title: "My experience",
  description:
    "With hands-on experience in software development, I have successfully contributed to various projects ranging from creating user-friendly applications to solving complex technical challenges.",
  items: [
    {
      company: "Fatality Win Inc",
      position: "Software Engineer",
      duration: "2023 - Present",
    },
    {
      company: "GOTO Indonesia",
      position: "Web developer",
      duration: "2020 - 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Backend developer",
      duration: "2020 - 2022",
    },
    {
      company: "Bank Central Asia",
      position: "Cyber Security",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "/asset/resune/cap.svg",
  title: "My education",
  description:
    "With hands-on experience in software development, I have successfully contributed to various projects ranging from creating user-friendly applications to solving complex technical challenges.",
  items: [
    {
      institution: "University Muhammadiyah Indonesia",
      degree: "Informatic Engineering",
      duration: "2023",
    },
    {
      institution: "Codeacademy",
      degree: "Reverse Engineering Specialist",
      duration: "2023",
    },
    {
      institution: "Cyber Security Academy",
      degree: "Cyber Security Red Team",
      duration: "2021",
    },
    {
      institution: "Bootcamp Code",
      degree: "Fullstack Developer certified",
      duration: "2021",
    },
  ],
};

const skills = {
  title: "My Skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="main-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0
          gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                            flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w=[260px] min-h-[60px]
                                text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div>
                            {/* dot */}
                            <span
                              className="w-[6px] h-[6px] rounded full
                                    bg-accent"
                            ></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                            flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w=[260px] min-h-[60px]
                                text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div>
                            {/* dot */}
                            <span
                              className="w-[6px] h-[6px] rounded full
                                    bg-accent"
                            ></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skills, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center
                              items-center group"
                              >
                                <div
                                  className="text-6xl group-hover:text-accent
                                transition-all duration-300"
                                >
                                  {skills.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skills.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            {/* experience */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-l xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center
                      xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
