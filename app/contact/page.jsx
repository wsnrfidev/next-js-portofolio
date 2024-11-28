"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 85776153331",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "wsnfii60@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kelapa Gading, Jakarta Utara",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex flex-col justify-center py-12"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/60">
            Feel free to reach out to us for any inquiries or assistance.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 mb-12 lg:mb-0">
            {info.map((item, index) => (
              <div key={index} className="flex gap-4 items-center">
                <div
                  className="w-12 h-12 bg-accent rounded-full flex justify-center items-center
                  text-white text-xl"
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col gap-6" action="https://formspree.io/f/xjkvazqa" method="POST">
              {/* Name Input */}
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                className="bg-white/10 text-white placeholder-white/60 focus:ring-accent"
              />
              {/* Email Input */}
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                className="bg-white/10 text-white placeholder-white/60 focus:ring-accent"
              />
              {/* Phone Number Input */}
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="bg-white/10 text-white placeholder-white/60 focus:ring-accent"
              />
              {/* Service Select */}
              <Select name="service" required>
                <SelectTrigger className="bg-white/10 text-white placeholder-white/60 focus:ring-accent">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-white">Select a Service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Software Development">Software Development</SelectItem>
                    <SelectItem value="Reverse Engineering">Reverse Engineering</SelectItem>
                    <SelectItem value="Low-level Programming">Low-level Programming</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Message Textarea */}
              <Textarea
                name="message"
                placeholder="Your Message"
                className="bg-white/10 text-white placeholder-white/60 focus:ring-accent"
              />
              {/* Submit Button */}
              <Button
                type="submit"
                className="bg-accent text-white px-6 py-3 rounded-lg
                hover:bg-accent-dark transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
