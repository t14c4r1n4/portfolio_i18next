import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../../i18n";
import Flag from 'react-flagkit';
import getNavItems from "../constants/nav_items";
import useMediaQuery from "./useMediaQuery";

const lngs = {
  en: { nativeName: 'English', flag: 'US' },
  de: { nativeName: 'Deutsch', flag: 'DE' },
  es: { nativeName: 'Español', flag: 'ES' }
};

const Navbar = () => {
  const { t } = useTranslation();
  const navItems = getNavItems();
  const isMobile = useMediaQuery('(max-width: 768px)'); // Check for mobile view

  // State to control the dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when an item is selected
  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Toggle language dropdown visibility
  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageDropdownOpen(false); // Close language dropdown after selection
  };

  return (
    <div className="navbar md:px-[2vw] md:mb-[2vh] w-full fixed text-primary z-50 bg-base-200">
      {/* Start of Navbar */}
      <div className="navbar-start">
        {/* Mobile Dropdown Menu */}
        {isMobile && (
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>

            </button>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
                {navItems.map((page) => (
                  <li key={page.id} className='w-xs'>
                    <Link
                      to={`${page.href}`}
                      className="flex flex-col hover:scale-125 duration-700 hover:text-secondary transition-colors"
                      onClick={closeDropdown}
                    >
                      <span className="mx-auto mb-2">
                        {page.icon}
                      </span>
                      <span className="text-xs">{page.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Center of Navbar for larger screens */}
      {!isMobile && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-8">
            {navItems.map((page) => (
              <li key={page.id} className="w-xs">
                <Link
                  to={`${page.href}`}
                  className="flex flex-col hover:scale-125 duration-700 hover:text-secondary transition-colors"
                >
                  <span className="mx-auto mb-2">
                    {page.icon}
                  </span>
                  <span className="text-xs">{page.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Language Selector */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="btn btn-ghost flex items-center"
            onClick={toggleLanguageDropdown}
          >
            <Flag country={lngs[i18n.language]?.flag || 'US'} className="mr-2" />
            <span>{lngs[i18n.language]?.nativeName || 'English'}</span>
            <svg
              className="fill-current ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>
          {isLanguageDropdownOpen && (
            <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
              {Object.keys(lngs).map((lng) => (
                <li key={lng}>
                  <button
                    onClick={() => handleLanguageChange(lng)}
                    className="flex items-center"
                  >
                    <Flag country={lngs[lng].flag} className="mr-2" />
                    {lngs[lng].nativeName}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
