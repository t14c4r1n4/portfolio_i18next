/* eslint-disable react/prop-types */
import { FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import me from "../images/me_circle.png";


const About = () => {
    const { t } = useTranslation();

    return (
        <div className="md:text-md lg:text-lg section-container" id="about">
            <h2>{t('nav.about')}</h2>
            <img
                src={me}
                alt="Carina"
                className="float-right m-2 h-[5rem] hover:scale-125"
            />
            <div>
                <p className="text">{t('about.intro')}</p>
                <p className="text">{t('about.course')}</p>
                <p className="text">{t('about.learning')}</p>
                <p className="text">{t('about.current')}</p>
            </div>
            <a href="./src/assets/components/2410_cv_carinaarnold.pdf" download className="hover:fill-secondary hover:text-secondary">

                <i><FaDownload className="w-8 h-8" /></i>
                <span>{t('about.cv-download')}</span>
            </a>
        </div>
    );
};

export default About;
