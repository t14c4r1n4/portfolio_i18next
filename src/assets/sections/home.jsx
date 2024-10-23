import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div id="home" className="section-container">
            <div>
                <h2>{t('nav.home')}</h2>
                <p>{t('hero.greeting')}</p>
                <p>{t('hero.part1')}</p>
                <a href="./#contact" className="font-dosis">
                    <button className="button-accent">{t('hero.cta')}</button>
                </a>
                <p>{t('hero.part2')}</p>
            </div>

        </div>
    )
}

export default Home;