import getNavItems from "../constants/nav_items";
import ToTopButton from "../components/scrollToTop";



const Page = () => {
    const nav_items = getNavItems();
    return (
        <div className="h-full mt-[2vh] md:pt-[2vh] md:mb-[6vh] container place-items-center">
            {nav_items.map((page) => (
                <div id={page.id}
                    key={page.id}
                    className="relative flex items-center justify-center mx-auto"
                >
                    <div className="max-w-[95vw] md:max-w-[70vw] flex justify-center w-full md:space-y-8 mb-[1vh] md:mb-10 shadow-lg">
                        <section className="">
                            {page.section}
                        </section>
                    </div>
                </div>
            ))}
            <ToTopButton />
        </div>
    );
};

export default Page;