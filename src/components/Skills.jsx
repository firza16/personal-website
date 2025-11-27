import { SiJavascript, SiExpress, SiTailwindcss, SiMysql, SiPostman, SiGooglecloud } from "react-icons/si";
import { FaPhp, FaNodeJs, FaReact, FaBootstrap, FaGit, FaLaravel, FaPython, FaDocker } from "react-icons/fa";
import { FaFlutter, FaDartLang } from "react-icons/fa6";
import { PiFileSql } from "react-icons/pi";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FiFigma } from "react-icons/fi";

function Skills() {
  return (
    <div>
      <div className="my-10">
        <h2 className="mb-5 font-medium text-gray-900">Skills</h2>

        <div className="space-y-3">
          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-45">
              <span className="block text-sm text-gray-500">Programming Languages:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <SiJavascript className="mr-1" />
                  JavaScript
                </li>

                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaPhp className="mr-1" />
                  PHP
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaDartLang className="mr-1" />
                  Dart
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaPython className="mr-1" />
                  Python
                </li>
                <li className="me-3 inline-flex items-center text-sm text-gray-700">
                  <PiFileSql className="mr-1" />
                  SQL
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-45">
              <span className="block text-sm text-gray-500">Frameworks and Libraries:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaReact className="mr-1" />
                  React
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <SiExpress className="mr-1" />
                  Express JS
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaNodeJs className="mr-1" />
                  Node.js
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaLaravel className="mr-1" />
                  Laravel
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaFlutter className="mr-1" />
                  Flutter
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <SiTailwindcss className="mr-1" />
                  TailwindCSS
                </li>
                <li className="me-3 inline-flex items-center text-sm text-gray-700">
                  <FaBootstrap className="mr-1" />
                  Bootstrap
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-45">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">Databases:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <BiLogoPostgresql className="mr-1" />
                  PostgreSQL
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <SiMysql className="mr-1" />
                  MySQL
                </li>
              </ul>
            </dd>
          </dl>

          <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-45">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">Tools:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <VscVscode className="mr-1" />
                  Visual Studio Code
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <SiGooglecloud className="mr-1" />
                  Google Cloud Platform
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaGit className="mr-1" />
                  Git
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <SiPostman className="mr-1" />
                  Postman
                </li>

                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FaDocker className="mr-1" />
                  Docker
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <IoLogoFirebase className="mr-1" />
                  Firebase
                </li>
                <li className="me-3 after:content inline-flex items-center text-sm text-gray-700">
                  <FiFigma className="mr-1" />
                  Figma
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Skills;
