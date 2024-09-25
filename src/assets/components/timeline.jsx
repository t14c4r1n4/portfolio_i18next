import React from 'react';
import { useTranslation } from 'react-i18next';

const Timeline = ({ events, titleKey }) => {
    const { t } = useTranslation();

    return (
        <>
            <h2 className="text-center text-2xl font-bold my-4">{t(titleKey)}</h2>
            <div className="container mx-auto flex flex-col items-center">
                <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
                    {events.map((event) => (
                        <li className='rounded-box list-none max-w-screen-md py-4'>
                            <div className="timeline-middle p-3 rounded-full mr-4">
                                <img src={`../src/assets/images/companies/${event.icon}.png`} alt={`${event.company} logo`} className="w-8 h-8" />
                            </div>
                            <div key={event.id} className={`${event.nr % 2 === 0 ? 'timeline-end' : 'timeline-start'} bg-zinc-800 p-4 rounded-lg`} >
                                <div className="">
                                    <div className="">
                                        <time className="text-gray-300">{event.date}</time>
                                        <h3 className="text-lg font-semibold">{t(`${event.title}`)}</h3>
                                        <p className="text-sm text-gray-600">{event.company} - {event.location}</p>
                                        <ul className="list-disc ml-6 mt-2">
                                            {event.description.map((desc, index) => (
                                                <li key={index}>{t(`${desc}`)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className='divider' />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Timeline;