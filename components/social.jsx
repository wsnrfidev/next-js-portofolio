import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";


const socials = [
  { icon: <FaGithub />, path: "https://github.com/wsnrfidev" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/wsnrfidev" },
  { icon: <FaInstagram/>, path: "https://instagram.com/wisnurafi_" },
  { icon: <FaFacebook />, path: "https://facebook.com/MyNameRafii" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
