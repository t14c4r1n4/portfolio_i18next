import React, { useState } from "react";
import me from "../images/me_circle.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const AccordionButton = ({ active, onClick }) => (
    <button type="button" className="mx-auto text-purple-500 flex flex-row" onClick={onClick}>
        {!active && "Read more ..."}
        {active ? <FaChevronUp className="w-6 h-6" /> : <FaChevronDown className="w-6 h-6" />}
    </button>
);

const About = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = () => {
        setActiveIndex(activeIndex === 0 ? null : 0);
    };
    const { t } = useTranslation();

    return (
        <div className="section-container">
            <h2>Hi, this is Carina.</h2>
            <img
                src={me}
                alt="Carina"
                className="h-28 clip-circle neubox float-right m-2 hover:scale-125"
            />
            <AccordionButton active={activeIndex === 0} onClick={handleClick} />
            {activeIndex === 0 && (
                <div className="">
                    {t('about.intro')}
                </div>
            )}
        </div>

    );
};

export default About;