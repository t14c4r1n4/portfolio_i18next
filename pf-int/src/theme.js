import { ThemeContext } from '@emotion/react';
import { createTheme, styled } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#460b6b',
        },
        secondary: {
            main: '#4B5563',
        },
        background: {
            paper: '#343433',
            default: '#242423',
        },
        action: {
            hover: 'rgba(0, 0, 0, 0.08)',
        },
        type: 'dark',
        info: {
            main: '#26a69a',
        },
        success: {
            main: '#64dd17',
        },
        warning: {
            main: '#ff3d00',
        },
        error: {
            main: '#d50000',
        },
        text: {
            secondary: '#e0e0e0',
            primary: '#eeeeee',
            hint: '#d5d5d5',
        },
    },
    typography: {
        fontFamily: 'Exo',
        h1: { fontFamily: 'Orbitron' },
        h2: { fontFamily: 'Orbitron' },
        h3: { fontFamily: 'Orbitron' },
        h4: { fontFamily: 'Orbitron' },
        h5: { fontFamily: 'Orbitron' },
        h6: { fontFamily: 'Orbitron' },

        body1: {
            fontSize: '1rem',
        },
        body2: {
            fontSize: '0.875rem',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#460b6b',
                    zIndex: 40,
                    position: 'fixed',
                    top: 0,
                    color: 'primary',
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: '#4B5563',
                    '&:hover': {
                        fontWeight: 'bold',
                        transform: 'scale(1.15)',
                    },
                    transition: 'transform 0.3s',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '1vh 2vw',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: '#e0e0e0',
                    '&.Mui-focused fieldset': {
                        borderColor: 'primary',
                    },
                }
            }
        }
    },

})



export default theme;