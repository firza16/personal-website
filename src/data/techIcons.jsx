
import {
  SiJavascript, SiExpress, SiTailwindcss, SiMysql, SiPostman, SiGooglecloud
} from "react-icons/si";

import {
  FaPhp, FaNodeJs, FaReact, FaBootstrap, FaGit, FaLaravel, FaPython
} from "react-icons/fa";

import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { PiFileSql } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FiFigma } from "react-icons/fi";

const techIcons = {
  javascript: {
    icon: <SiJavascript size={20} color="#F7DF1E" />,
    label: "JavaScript",
  },
  php: {
    icon: <FaPhp size={20} color="#4F5D95" />,
    label: "PHP",
  },
  node: {
    icon: <FaNodeJs size={20} color="#3C873A" />,
    label: "Node.js",
  },
  express: {
    icon: <SiExpress size={20} color="#000000" />,
    label: "Express.js",
  },
  react: {
    icon: <FaReact size={20} color="#61DBFB" />,
    label: "React",
  },
  bootstrap: {
    icon: <FaBootstrap size={20} color="#7952B3" />,
    label: "Bootstrap",
  },
  tailwind: {
    icon: <SiTailwindcss size={20} color="#38BDF8" />,
    label: "Tailwind CSS",
  },
  git: {
    icon: <FaGit size={20} color="#F05032" />,
    label: "Git",
  },
  laravel: {
    icon: <FaLaravel size={20} color="#FF2D20" />,
    label: "Laravel",
  },
  python: {
    icon: <FaPython size={20} color="#3776AB" />,
    label: "Python",
  },
  flutter: {
    icon: <FaFlutter size={20} color="#02569B" />,
    label: "Flutter",
  },
  dart: {
    icon: <FaDartLang size={20} color="#0175C2" />,
    label: "Dart",
  },
  mysql: {
    icon: <SiMysql size={20} color="#00618A" />,
    label: "MySQL",
  },
  postgresql: {
    icon: <BiLogoPostgresql size={20} color="#336791" />,
    label: "PostgreSQL",
  },
  sql: {
    icon: <PiFileSql size={20} color="#00758F" />,
    label: "SQL",
  },
  firebase: {
    icon: <IoLogoFirebase size={20} color="#FFCA28" />,
    label: "Firebase",
  },
  postman: {
    icon: <SiPostman size={20} color="#FF6C37" />,
    label: "Postman",
  },
  gcp: {
    icon: <SiGooglecloud size={20} color="#4285F4" />,
    label: "Google Cloud",
  },
  vscode: {
    icon: <VscVscode size={20} color="#007ACC" />,
    label: "VS Code",
  },
  figma: {
    icon: <FiFigma size={20} color="#F24E1E" />,
    label: "Figma",
  },
};

export default techIcons;
