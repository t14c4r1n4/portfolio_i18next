import React from "react";
import getNavItems from "../constants/nav_items";
import ToTopButton from "../components/scrollToTop";



const Page = () => {
    const nav_items = getNavItems();
    return (
        <div className="h-full mt-[8vh] md:pt-[10vh] md:mb-[6vh] container place-items-center">
            {nav_items.map((page) => (
                <div id={page.id}
                    key={page.id}
                    className="relative flex items-center justify-center"
                >
                    <div className="max-w-[95vw] md:max-w-[70vw] flex justify-center w-full md:space-y-8 md:p-10 mb-[1vh] md:mb-10 shadow-lg">
                        <section className="max-w-[90vw]">
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