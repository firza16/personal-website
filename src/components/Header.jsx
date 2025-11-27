import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="relative z-10 top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm">
        <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-500 rounded-full mx-2 py-2.5 sm:flex sm:items-center sm:justify-between sm:py-0 sm:px-4 sm:mx-auto">
          <div className="px-4 sm:px-0 flex justify-between items-center">
            <div className="flex items-center">
              <a className="flex-none rounded-sm text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="/" aria-label="Firza Hakim">
                <h1 className="text-gray-800">Firza Hakim</h1>
              </a>
            </div>

            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center size-7 border border-gray-200 text-gray-800 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200"
                id="hs-navbar-header-floating-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-header-floating"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-header-floating"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3 mt-3 sm:mt-0 py-2 sm:py-0 sm:ps-7">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-0.5 sm:py-3 px-4 sm:px-1 border-s-2 sm:border-s-0 sm:border-b-2 font-medium focus:outline-hidden ${isActive ? "border-gray-800 text-gray-800" : "border-transparent text-gray-500 hover:text-gray-800"}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `py-0.5 sm:py-3 px-4 sm:px-1 border-s-2 sm:border-s-0 sm:border-b-2 font-medium focus:outline-hidden ${isActive ? "border-gray-800 text-gray-800" : "border-transparent text-gray-500 hover:text-gray-800"}`
                }
              >
                Projects
              </NavLink>

              <NavLink
                to="/certifications"
                className={({ isActive }) =>
                  `py-0.5 sm:py-3 px-4 sm:px-1 border-s-2 sm:border-s-0 sm:border-b-2 font-medium focus:outline-hidden ${isActive ? "border-gray-800 text-gray-800" : "border-transparent text-gray-500 hover:text-gray-800"}`
                }
              >
                Certifications
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
