import { GoLaw } from "react-icons/go";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from "react";
import ImprintModal from '../components/imprintmodal';

const footerIconProps = {
  className:
    "size-6 transition-transform duration-300 hover:scale-115 hover:opacity-100 opacity-50 fill-zinc-600 rounded-2xl",
};

export default function Footer() {
  const YEAR = new Date().getFullYear();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <footer className="bottom-0 z-3 sticky bg-base-100 p-4 w-full">
      <div className="flex flex-cols justify-center space-x-2 md:space-x-5 divide-x divide-dotted divide-zinc-800 container">

        {/* Imprint Button with Tooltip */}
        <button
          onClick={openModal}
          className="relative tooltip-top tooltip"
          data-tip="Impressum"
        >
          <i className="drop-shadow-xl rounded-full group">
            <GoLaw {...footerIconProps} />
          </i>

        </button>

        {/* Imprint Modal */}
        <ImprintModal isOpen={modalIsOpen} onRequestClose={closeModal} />

        {/* Container for Social Icons */}
        <div className="flex flex-row space-x-2 md:space-x-3 pl-1 md:pl-3">
          {/* Github */}
          <a
            href="https://github.com/t14c4r1n4"
            className="tooltip-top tooltip"
            target="_blank"
            data-tip="t14c4r1n4"
          >
            <i className="flex justify-center drop-shadow-xl rounded-full">
              <FaGithub
                {...footerIconProps}
              />
            </i>
          </a>
          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/carina-webdev/"
            className="tooltip-top tooltip"
            target="_blank"
            data-tip="carina-webdev"
          >
            <i className="flex justify-center drop-shadow-xl rounded-full">
              <FaLinkedin
                {...footerIconProps}
              />
            </i>
          </a>
          {/* Fiverr */}
          <a
            href="https://de.fiverr.com/ghost_coder_"
            className="tooltip-top tooltip"
            target="_blank"
            data-tip="ghost_coder_"
          >
            <i className="flex justify-center drop-shadow-xl rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 508.02 508.02"
                {...footerIconProps}
              >
                <circle fill="" cx="254.01" cy="254.01" r="254.01" />
                <circle fill="#A1A1AA" cx="315.97" cy="162.19" r="26.87" />
                <path
                  fill="#A1A1AA"
                  d="M345.87,207.66h-123V199.6c0-15.83,15.83-16.13,23.89-16.13,9.25,0,13.44.9,13.44.9v-43.6a155.21,155.21,0,0,0-19.71-1.19c-25.68,0-73.16,7.16-73.16,61.51V208h-22.4v40.31h22.4v85.1h-20.9v40.31H247.34V333.37H222.85v-85.1H290v85.1H269.13v40.31h97.65V333.37H345.87Z"
                  transform="translate(-1.83 -0.98)"
                />
              </svg>
            </i>
          </a>

          {/* Discord */}
          <a
            href="https://discord.com/"
            className="tooltip-top tooltip"
            target="_blank"
            data-tip=".car1na"
          >
            <i className="flex justify-center drop-shadow-xl rounded-full">
              <FaDiscord {...footerIconProps} />
            </i>
          </a>
        </div>

        <p className="md:mx-5 pl-1 md:pl-3 text-zinc-500">© {YEAR} Carina Arnold</p>
      </div>
    </footer>
  );
}
