import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../../i18n";
import Flag from 'react-flagkit';
import getNavItems from "../constants/nav_items";

const lngs = {
  en: { nativeName: 'English', flag: 'US' },
  de: { nativeName: 'Deutsch', flag: 'DE' },
  es: { nativeName: 'Español', flag: 'ES' }
};

const Navbar = () => {
  const { t } = useTranslation();
  const navItems = getNavItems();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none gap-2">

        {/* Navigation Items */}
        <ul className="flex space-x-4 p-0">
          {navItems.map((page) => (
            <li key={page.id}>
              <Link
                to={`${page.href}`}
                className="flex flex-row items-center text-lg hover:scale-110 transition-transform duration-300"
              >
                <span className="mr-2">
                  {React.cloneElement(page.icon, {
                    className: "w-6 h-6"
                  })}
                </span>
                <span>{page.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Searchbar */}
        <div className='form-control'>
          <input type="text" placeholder={t('nav.search')} className='input input-bordered w-24 md:w-auto' />
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
    </div>
  );
};

export default Navbar;
