import React from "react";
import nav_items from "../constants/nav_items";
import ToTopButton from "../components/scrollToTop";


const Page = () => {
    return (
        <div className="h-full pt-[10vh] mb-[6vh] container">
            {nav_items.map((page) => (
                <div id={page.id}
                    key={page.id}
                    className="relative h-full flex items-center justify-center"
                >
                    <div className="max-w-[90vw] md:max-w-[70vw] flex justify-center w-full space-y-8 p-10 mb-10 bg-zinc-800 glass rounded-2xl shadow-lg">
                        <section className="max-w-[90vw] overflow-y: auto;">
                            <h2 className="text-4xl text-center font-Orbitron mb-[3vh]">
                                {page.name}
                            </h2>
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