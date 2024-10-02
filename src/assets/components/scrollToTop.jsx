import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const ToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        visible && (
            <div
                onClick={scrollToTop}
                role="button"
                className="fixed bottom-14 right-4 z-50 cursor-pointer p-2 bg-base-200 text-primary rounded-full shadow-lg  transition-all duration-300">
                <MdOutlineKeyboardDoubleArrowUp className='w-8 h-8' />
            </div>
        )
    );
};

export default ToTopButton;
