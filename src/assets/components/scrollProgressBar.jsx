import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollPosition(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener on component unmount
    }, []);

    return (
        <div>
            <progress className="progress progress-primary w-full fixed top-[4rem] z-50" value={scrollPosition} max="100" />
        </div>
    );
};

export default ScrollProgress;
