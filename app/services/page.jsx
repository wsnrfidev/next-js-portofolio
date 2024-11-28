"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am a web developer with expertise in building responsive and dynamic websites using technologies like HTML, CSS, JavaScript, React, and Next.js. I focus on creating clean, user-friendly interfaces and delivering high-quality web applications. Always eager to learn and adapt, I aim to provide innovative solutions for web development projects.",
    href: "",
  },
  {
    num: "02",
    title: "Software Development",
    description:
      "I am a dedicated software developer with a strong foundation in designing, developing, and maintaining software solutions. Proficient in programming languages like Python, Java, and C++, I specialize in creating efficient, scalable, and user-friendly applications. With a focus on problem-solving and clean code practices, I am passionate about delivering innovative software solutions that meet user and business needs.",
    href: "",
  },
  {
    num: "03",
    title: "Reverse Engineering",
    description:
      "I am a reverse engineering specialist with expertise in analyzing, understanding, and modifying software at a low level. Proficient in techniques like memory scanning, manipulation, and debugging, I excel in working with programming languages such as C, C++, C#, and Objective-C. My focus lies in dissecting software to uncover its inner workings, improve functionality, or adapt it to specific needs. With a strong foundation in system architecture and problem-solving, I am passionate about unraveling complex systems and delivering innovative solutions.",
    href: "",
  },
  {
    num: "04",
    title: "Low-level Programmer",
    description:
      "I am a low-level programmer with expertise in working close to the hardware and system architecture. Proficient in languages like C, C++, C#, and Objective-C, I specialize in memory management, memory manipulation, and creating highly optimized and efficient code. With a deep understanding of system calls, hardware interactions, and debugging tools, I focus on developing robust software solutions, from embedded systems to performance-critical applications. My passion lies in solving complex problems and optimizing systems at their core.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col jsutify-center gap-6 group"
              >
                <div>
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover
                  transition-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    href={service.href}
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2
                  className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                transition-all duration-500"
                >
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
