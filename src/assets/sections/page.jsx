import React from "react";
import getNavItems from "../constants/nav_items";
import ToTopButton from "../components/scrollToTop";



const Page = () => {
    const nav_items = getNavItems();
    return (
        <div className="h-full md:pt-[10vh] md:mb-[6vh] container pt-20">

            {nav_items.map((page) => (
                <div id={page.id}
                    key={page.id}
                    className="relative flex items-center justify-center"
                >
                    <div className="max-w-[95vw] md:max-w-[70vw] flex justify-center w-full md:space-y-8 md:p-10 mb-[2vh] md:mb-10 shadow-lg">
                        <section className="max-w-[90vw] overflow-y:auto;">
                            {page.section}
                            <hr className="inset-x-0 bottom-0 mt-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                        </section>
                    </div>
                </div>
            ))}
            <ToTopButton />
        </div>
    );
};

export default Page;