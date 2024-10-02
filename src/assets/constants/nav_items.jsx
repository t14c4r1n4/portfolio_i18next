import { IoChatbubblesOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import { MdPermIdentity } from "react-icons/md";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";

import About from '../sections/about';
import Home from '../sections/home';
import Projects from '../sections/projects';
import Services from '../sections/services';
import Contact from '../sections/contact';

import { useTranslation } from "react-i18next";

const iconProps = {
  className: "size-8"
};

const getNavItems = () => {
  const { t } = useTranslation();

  return [
    {
      id: 'home',
      alt: t('nav.home'),
      name: t('nav.home'),
      href: '/',
      icon: <HiOutlineHome {...iconProps} />,
      section: <Home />,
      onClick: () => handleScrollTo('home')
    },
    {
      id: 'about',
      alt: t('nav.about'),
      name: t('nav.about'),
      href: '/about',
      icon: <MdPermIdentity {...iconProps} />,
      section: <About />,
      onClick: () => handleScrollTo('about')
    },
    {
      id: 'projects',
      alt: t('nav.projects'),
      name: t('nav.projects'),
      href: '/projects',
      icon: <IoBriefcaseOutline {...iconProps} />,
      section: <Projects />,
      onClick: () => handleScrollTo('projects')
    },
    {
      id: 'services',
      alt: t('nav.services'),
      name: t('nav.services'),
      href: '/services',
      icon: <MdOutlineDeveloperMode {...iconProps} />,
      section: <Services />,
      onClick: () => handleScrollTo('services')
    },
    {
      id: 'contact',
      alt: t('nav.contact'),
      name: t('nav.contact'),
      href: '/contact',
      icon: <IoChatbubblesOutline {...iconProps} />,
      section: <Contact />,
      onClick: () => handleScrollTo('contact')
    }
  ];
};

export default getNavItems;
