import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

const Timeline = ({ events, titleKey }) => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const [lineHeight, setLineHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
            const containerBottom = containerRef.current.getBoundingClientRect().bottom + window.scrollY;

            const scrollY = window.scrollY + window.innerHeight * 0.8; // Start Linie etwas später
            const newHeight = Math.min(Math.max(scrollY - containerTop, 0), containerBottom - containerTop);

            setLineHeight(newHeight);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // initial
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="px-4 md:px-0">
            <h2 className="text-center text-3xl my-6 font-bold">{t(titleKey)}</h2>

            <div ref={containerRef} className="relative md:flex md:flex-col items-center">
                {/* Timeline-Linie */}
                <div
                    className="hidden md:block absolute left-1/2 w-1 bg-purple-600 -translate-x-1/2 origin-top"
                    style={{ height: `${lineHeight}px`, transition: 'height 0.2s ease-out', top: 0 }}
                ></div>

                {/* Event-Cards */}
                {events.map((event, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={event.id}
                            className={`flex flex-col md:flex-row w-full md:max-w-4xl items-center mb-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Event Card */}
                            <div className="bg-zinc-800 p-4 rounded-lg md:w-1/2">
                                <time className="text-sm text-secondary">{event.date}</time>
                                <h3 className="text-lg font-semibold mt-1">{t(event.title)}</h3>
                                <p className="text-sm text-secondary opacity-50">
                                    {event.company} - {event.location}
                                </p>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    {event.description.map((desc, idx) => (
                                        <li key={idx}>{t(desc)}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Logo */}
                            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-zinc-800 border border-zinc-600 mx-4 flex-shrink-0 mt-4 md:mt-0">
                                <img
                                    src={`.../public/companies/${event.icon}.png`}
                                    alt={`${event.company} logo`}
                                    className="object-contain w-10 h-10 transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
