import React, { useState } from "react";
import me from "../images/me_circle.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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

    return (
        <div className="mx-auto container text-center text-md tracking-wide">
            <h1>Hi, this is Carina.</h1>
            <img
                src={me}
                alt="Carina"
                className="h-28 clip-circle neubox float-right m-2 hover:scale-125"
            />
            <AccordionButton active={activeIndex === 0} onClick={handleClick} />
            {activeIndex === 0 && (
                <div className="">
                    <p>
                        In 2022, after another <span className="keywords">temporary job</span>, I decided that it was time for a <span className="keywords">change</span>.
                    </p>
                    <p>
                        While traveling, I met a girl who worked as an <span className="keywords">online marketing manager</span>, and it piqued my interest. I began a <span className="keywords">correspondence course</span> to become a certified online marketing manager, which also included some <span className="keywords">HTML5 and CSS3 modules</span>. I found myself fascinated by what I could create with these languages.
                    </p>
                    <p>
                        Then, I received an offer for a course as an <span className="keywords">Online Shop Developer</span> with <span className="keywords">Python</span> Basics. This marked my introduction to programming, and I discovered a <span className="keywords">passion for web development</span>.
                    </p>
                    <p>
                        In my free time, I delved into <span className="keywords">Django</span>, and later, <span className="keywords">JavaScript</span>, <span className="keywords">React</span>, and <span className="keywords">Vue</span>. Currently, I favor React for its simple syntax and vibrant community.
                    </p>
                </div>
            )}
            <div className="p-2">
                <p>Today, I proudly present my <span className="keywords">first completed project in React</span>: <br />My Portfolio Website.</p>
            </div>
            <XpTimeline />
        </div>

    );
};

export default About;