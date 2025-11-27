import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Profile() {
  return (
    <div className="my-10">
      <div className="flex items-center gap-x-4">
        <div className="shrink-0">
          <img className="shrink-0 size-16 rounded-full" src="/img/firza.jpg" alt="Avatar" />
        </div>

        <div className="grow">
          <h1 className="text-lg font-medium text-gray-800">Firza Hakim</h1>
          <p className="text-sm text-gray-600">Software Developer</p>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-700 sm:leading-normal">
          Hi there! I’m Firza, a final-year Information Systems student who’s passionate about web development, with a particular focus on backend development. I enjoy designing and building APIs, working with databases, and creating
          systems that are efficient and scalable. I actively sharpen my skills through continuous learning and development programs. Always curious and open to challenges, I’m excited to keep growing and make an impact in tech.
        </p>

        <ul className="mt-5 flex flex-col gap-y-3">
          <li className="flex items-center gap-x-2.5">
            <IoMdMail />
            <a className="text-[13px] text-gray-600 underline hover:text-gray-700 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="mailto:firzahakimcrack@gmail.com">
              firzahakimcrack@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-x-2.5">
            <FaLinkedin />
            <a className="text-[13px] text-gray-600 underline hover:text-gray-700 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="https://linkedin.com/in/firzahakim" target="_blank">
              LinkedIn
            </a>
          </li>

          <li className="flex items-center gap-x-2.5">
            <FaGithub />
            <a className="text-[13px] text-gray-600 underline hover:text-gray-700 hover:decoration-2 focus:outline-hidden focus:decoration-2" href="https://github.com/firza16" target="_blank">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
