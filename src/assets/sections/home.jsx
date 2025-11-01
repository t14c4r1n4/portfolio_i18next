import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div id="home" className="md:text-md lg:text-lg section-container">

            <div className="text-center leading-10">
                <p className="text-2xl">Ca|ri|na Ar|nold</p>
                <p className="text-xl text-secondary font-bold mb-10">{t('hero.intro')}</p>
                <p className="leading-8">{t('hero.part1')}</p>
                <a href="./contact" className="font-dosis">
                    <button className="border-full bg-primary m-5 p-2 rounded-full">{t('hero.cta')}</button>
                </a>
                <p className="leading-8">{t('hero.part2')}</p>
            </div>

        </div>)
}

export default Home;