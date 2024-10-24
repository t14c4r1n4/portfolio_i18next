import { GoLaw } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import ImprintModal from '../components/imprintmodal';

const footerIconProps = {
  className:
    "size-6 transition-transform duration-300 group-hover:scale-115 group-hover:opacity-100 opacity-50 fill-zinc-600 rounded-2xl",
};

export default function Footer() {
  // State for tooltip
  const [activeIndex, setActiveIndex] = useState(null);
  // Get year
  const YEAR = new Date().getFullYear();

  // Imprint modal state
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <footer className="bottom-0 z-3 sticky bg-base-100 p-4 w-full">
      <div className="flex flex-cols justify-center space-x-5 divide-x divide-dotted divide-zinc-800 container">

        {/* Imprint Button with Tooltip */}
        <button
          onClick={openModal}
          onMouseEnter={() => setActiveIndex(0)}
          onMouseLeave={() => setActiveIndex(null)}
          className="relative"
        >
          <i className="drop-shadow-xl rounded-full group">
            <GoLaw {...footerIconProps} />
          </i>
          {/* Tooltip visible if active */}
          {activeIndex === 0 && (
            <span className="z-10 absolute justify-center bg-purple-600 mx-5 p-3 rounded-lg text-zinc-800 -translate-x-12 -translate-y-24 overflow-auto align-center">
              Impressum
            </span>
          )}
        </button>

        {/* Imprint Modal */}
        <ImprintModal isOpen={modalIsOpen} onRequestClose={closeModal} />

        {/* Container for Social Icons */}
        <div className="flex flex-row">
          <a
            href="https://github.com/t14c4r1n4"
            className={`${activeIndex === 1 ? "active" : ""} pl-3 relative`}
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <i className="flex justify-center drop-shadow-xl rounded-full group">
              <FaGithub {...footerIconProps} />
            </i>
            {activeIndex === 1 && (
              <span className="z-10 absolute justify-center bg-purple-600 mx-5 p-3 rounded-lg text-zinc-800 -translate-x-12 -translate-y-28 overflow-auto align-center">
                github:<br />t14c4r1n4
              </span>
            )}
          </a>
          <a
            href="https://www.linkedin.com/in/carina-webdev/"
            className={`${activeIndex === 2 ? "active" : ""} pl-3 relative`}
            onMouseEnter={() => setActiveIndex(2)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <i className="flex justify-center drop-shadow-xl rounded-full group">
              <FaLinkedin {...footerIconProps} />
            </i>
            {/* Tooltip visible if active */}
            {activeIndex === 2 && (
              <span className="z-10 absolute justify-center bg-purple-600 mx-5 p-3 rounded-lg text-zinc-800 -translate-x-8 -translate-y-36 overflow-auto align-center">
                linkedin:<br />carina-webdev
              </span>
            )}
          </a>
        </div>

        <p className="mx-5 pl-3 text-zinc-500">© {YEAR} Carina Arnold</p>
      </div>
    </footer>
  );
}