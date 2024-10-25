import { useTranslation } from 'react-i18next';

const Timeline = ({ events, titleKey }) => {
    const { t } = useTranslation();

    return (
        <div className=''>
            <h2 className="text-center text-3xl my-4">{t(titleKey)}</h2>
            <div className="flex flex-col items-center">
                <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
                    {events.map((event, index) => (
                        <li key={index} className='rounded-box list-none max-w-screen-md py-4'>
                            <div className="timeline-middle p-3 rounded-full mr-4">
                                <img src={`../src/assets/images/companies/${event.icon}.png`} alt={`${event.company} logo`} className="w-8 h-8 hover:scale-125" />
                            </div>
                            <div key={event.id} className={`${event.nr % 2 === 0 ? 'timeline-end' : 'timeline-start'} bg-zinc-800 p-4 rounded-lg`} >
                                <div className="">
                                    <div className="text-left">
                                        <time className="text-sm text-secondary">{event.date}</time>
                                        <h3 className="text-lg font-semibold">{t(`${event.title}`)}</h3>
                                        <p className="text-sm text-secondary opacity-50">{event.company} - {event.location}</p>
                                        <ul className="list-disc ml-6 mt-2">
                                            {event.description.map((desc, index) => (
                                                <li key={index}>{t(`${desc}`)}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {index < events.length - 1 && <hr className='divider' />}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Timeline;
