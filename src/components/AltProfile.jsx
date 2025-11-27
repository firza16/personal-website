import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Navbar from "../components/Navbar";

function AltProfile() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 lg:mb-10">
      <div>
        <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-2 sm:px-4 md:px-0 max-w-[640px] w-full">
          <Navbar />

          <section>
            <a href="https://www.linkedin.com/in/firzahakim/" target="_blank">
              <img alt="Firza" className="rounded-full w-40 h-40 object-cover bg-gray-100 block lg:mt-10 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-7 sm:mb-5 " src="img/firza.jpg" />
            </a>
            <h1 className="sm:mb-8 mb-6 text-2xl font-medium">Software Developer</h1>
            <div className="text-gray-800 text-[15px] ">
              <p className="mb-3">
                Hi there! I'm Firza, an aspiring <span className="font-bold">Backend Developer</span> who enjoys building APIs, working with databases, and developing scalable backend systems.
              </p>

              <p className="mb-3">I’m also interested in cloud technologies and DevOps, especially in improving reliability and deployment processes. </p>

              <p> I’m growing at my own pace and always open to new opportunities to learn.</p>
            </div>
          </section>

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
        </main>
      </div>
    </div>
  );
}

export default AltProfile;
