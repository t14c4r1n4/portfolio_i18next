import { useState } from 'react';
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
  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 50;
      const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
    closeDropdown();
  };
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
    <div className="top-0 left-0 z-50 sticky bg-base-200 lg:mb-[2vh] lg:px-[2vw] w-full text-lg text-primary md:text-xl lg:text-2xl navbar">
      {/* Start of Navbar */}
      <div className="ml-6 lg:ml-0 navbar-start">
        {/* Mobile Dropdown Menu */}
        {isMobile && (
          <div className="dropdown">
            <button
              tabIndex={0}
              className="flex-col btn btn-circle btn-ghost"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <span>{t('nav.menu')}</span>
            </button>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="z-10 bg-base-100 shadow mt-3 p-2 rounded-box dropdown-content menu menu-sm">
                {navItems.map((page) => (
                  <li key={page.id} className='w-xs'>
                    <button
                      className="flex flex-col hover:scale-125 hover:text-secondary duration-700"
                      onClick={() => handleScrollTo(page.id)}
                    >
                      <span className="mx-auto mb-2">
                        {page.icon}
                      </span>
                      <span className="text-xs">{page.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Center of Navbar for larger screens */}
      {!isMobile && (
        <div className="md:flex hidden navbar-center">
          <ul className="space-x-8 menu menu-horizontal">
            {navItems.map((page) => (
              <li key={page.id} className="w-xs">
                <Link
                  to={`${page.href}`}
                  className="flex flex-col hover:scale-125 hover:shadow-2xl hover:text-secondary duration-700"
                >
                  <span className="mx-auto mb-2">
                    {page.icon}
                  </span>
                  <span className="text-sm">{page.name}</span>
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
            className="flex items-center btn btn-ghost"
            onClick={toggleLanguageDropdown}
          >
            <Flag country={lngs[i18n.language]?.flag || 'US'} className="mr-2" />
            <span>{lngs[i18n.language]?.nativeName || 'English'}</span>
            <svg
              className="ml-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5z" />
            </svg>
          </button>
          {isLanguageDropdownOpen && (
            <ul className="z-50 bg-base-100 shadow p-2 rounded-box w-52 dropdown-content menu">
              {Object.keys(lngs).map((lng) => (
                <li key={lng} className='hover:scale-125 hover:text-secondary transition-colors hover:translate-x-4 duration-700'>
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
