import { useTranslation } from 'react-i18next';
import Timeline from '../components/timeline';

const Career = () => {
    const { t } = useTranslation();

    const work = t('timeline.work.events', { returnObjects: true });
    const edu = t('timeline.edu.events', { returnObjects: true });

    return (
        <div className="section-container" id="career">
            <Timeline events={edu} titleKey="timeline.education" />
            <Timeline events={work} titleKey="timeline.career" />
        </div>
    );
}

export default Career;
