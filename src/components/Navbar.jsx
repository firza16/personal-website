import { NavLink } from "react-router";
import { useState } from "react";
import Toast from "./Toast";

function Navbar() {
  const [toastMessage, setToastMessage] = useState("");
  const handleToast = () => {
    setToastMessage("Dark Mode is under development.");
    setTimeout(() => setToastMessage(""), 1500);
  };

  return (
    <nav className="lg:mb-10 mb-12 py-5 px-2 sm:px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <NavLink to="/" className=" text-3xl font-semibold">
            Firza Hakim
          </NavLink>
        </div>

        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          <NavLink to="/projects" className={({ isActive }) => `transition-all hover:text-neutral-800 flex align-middle relative ${isActive ? "text-neutral-900 font-semibold" : ""}`}>
            Projects
          </NavLink>

          <NavLink to="/certifications" className={({ isActive }) => `transition-all hover:text-neutral-800 flex align-middle relative ${isActive ? "text-neutral-900 font-semibold" : ""}`}>
            Certifications
          </NavLink>

          {toastMessage && <Toast message={toastMessage} />}
          <button id="theme-toggle" onClick={handleToast} aria-label="dark mode" className="flex items-center justify-center cursor-pointer transition-opacity duration-300 hover:opacity-90">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="h-[14px] w-[14px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
