// ScrollProgressBar.js
import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const ScrollProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const calculateScrollProgress = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const scrollTotal = scrollHeight - clientHeight;
        const scrollPosition = (scrollTop / scrollTotal) * 100;
        setProgress(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', calculateScrollProgress);
        return () => {
            window.removeEventListener('scroll', calculateScrollProgress);
        };
    }, []);

    return (
        <Box sx={{ width: '100%', position: 'fixed', top: 0, left: 0 }}>
            <LinearProgress variant="determinate" value={progress} />
        </Box>
    );
};

export default ScrollProgressBar;
