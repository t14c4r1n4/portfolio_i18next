import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

import About from '../sections/about';
import Home from '../sections/home';
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
      icon: <HomeIcon {...iconProps} />,
      section: <Home />,
      onClick: () => handleScrollTo('home')
    },
    {
      id: 'about',
      alt: t('nav.about'),
      name: t('nav.about'),
      href: '/about',
      icon: <PermIdentityIcon {...iconProps} />,
      section: <About />,
      onClick: () => handleScrollTo('about')
    },
    {
      id: 'services',
      alt: t('nav.services'),
      name: t('nav.services'),
      href: '/services',
      icon: <DeveloperModeIcon {...iconProps} />,
      section: <Services />,
      onClick: () => handleScrollTo('services')
    },
    {
      id: 'contact',
      alt: t('nav.contact'),
      name: t('nav.contact'),
      href: '/contact',
      icon: <QuestionAnswerIcon {...iconProps} />,
      section: <Contact />,
      onClick: () => handleScrollTo('contact')
    }
  ];
};

export default getNavItems;
