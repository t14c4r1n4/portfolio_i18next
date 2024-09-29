import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../../i18n";
import Flag from 'react-flagkit';
import { FiSearch } from 'react-icons/fi';
import getNavItems from "../constants/nav_items";

const lngs = {
  en: { nativeName: 'English', flag: 'US' },
  de: { nativeName: 'Deutsch', flag: 'DE' },
  es: { nativeName: 'Español', flag: 'ES' }
};

const Navbar = () => {
  const { t } = useTranslation();
  const navItems = getNavItems();
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const toggleSearchFocus = () => {
    setSearchFocused(!isSearchFocused);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };



  return (
    <div className="navbar flex bg-bg px-8 mb-10 text-primary">

      {/* Navigation Items */}
      <ul className="flex space-x-8 p-0 font-Orbitron tracking-widest ">
        {navItems.map((page) => (
          <li key={page.id} className='w-xs'>
            <Link
              to={`${page.href}`}
              className="flex flex-col hover:scale-125 duration-700 hover:text-secondary transition-colors"
            >
              <span className="mx-auto mb-2">
                {page.icon}
              </span>
              <span className='text-xs'>{page.name}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Searchbar - Initially a search icon, expands on click */}
      <div className="form-control flex-1 flex justify-center border-xl border-lime-400">
        <div className={`flex rounded-full input input-bordered`}>
          <FiSearch
            className="w-6 h-6 my-2"
            onClick={toggleSearchFocus}
          />
          <input
            type="text"
            placeholder={t('nav.search') + '...'}
            value={searchTerm}
            onChange={handleSearchChange}
            className={`border-none ${isSearchFocused === true ? "w-48" : "w-20"}`}
            onBlur={() => setTimeout(() => setSearchFocused(false), 600)}
          />
        </div>
      </div>

      {/* Language Selection */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <Flag country={lngs[i18n.language].flag} className="mr-2" />
            {lngs[i18n.language].nativeName}
            <svg className="fill-current ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            {Object.keys(lngs).map((lng) => (
              <li key={lng}>
                <button onClick={() => handleLanguageChange({ target: { value: lng } })} className="flex items-center">
                  <Flag country={lngs[lng].flag} className="mr-2" />
                  {lngs[lng].nativeName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
