import { useTranslation } from "react-i18next";

const Services = () => {
    const { t } = useTranslation();
    const services = t('services', { returnObjects: true });

    return (
        <div className="section-container" id="services">
            <h2>{t('nav.services')}</h2>
            <div className="space-y-2">
                {services.map((service, index) => (
                    <div key={index} id={service.id} className="card bg-base-200 shadow-xl">

                        <div className="card-body items-center">
                            <h3 className="card-title">
                                {service.name}
                            </h3>
                            {service.tasks.map((task, index) => (
                                <ul key={index} className="list-disc">
                                    <li className="">
                                        {task}
                                    </li>
                                </ul>
                            ))}

                        </div>
                    </div>))}
            </div>
        </div>)
}

export default Services;