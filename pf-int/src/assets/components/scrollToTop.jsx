import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Fab, Zoom, Box, useScrollTrigger } from '@mui/material';

const ToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
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
        <Zoom in={visible}>
            <Box
                onClick={scrollToTop}
                role="presentation"
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: '1vw',
                    zIndex: 50,
                }}
            >
                <Fab
                    color="secondary"
                    size="medium"
                    aria-label="scroll back to top"
                    sx={{
                        background: 'linear-gradient(to top right, #424242, #212121)',
                        color: 'lightgray',
                        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                            background: 'linear-gradient(to top right, #6a1b9a, #4a148c)',
                            color: 'white',
                        },
                    }}
                >
                    <KeyboardDoubleArrowUpIcon />
                </Fab>
            </Box>
        </Zoom>
    );
};

export default ToTopButton;
