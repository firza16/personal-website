import React, { useState } from "react";

function Certificate(props) {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Thumbnail */}
      <div className="group block relative overflow-hidden rounded-lg cursor-pointer" onClick={openModal}>
        <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src={props.img} alt="Certificate" />
        <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
          <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
            <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="text-xs">View</span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300" onClick={closeModal}>
          <div className="relative max-w-3xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-600 text-3xl" onClick={closeModal}>
              &times;
            </button>
            <img src={props.img} alt="Certificate" className="rounded-lg max-h-[90vh] w-auto" />
          </div>
        </div>
      )}
    </>
  );
}

export default Certificate;
