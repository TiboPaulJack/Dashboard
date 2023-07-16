import { createTheme } from '@mui/material/styles';

const height = '10px';
const padding = '10px';
const borderRadius = '5px';

const textFieldStyles = {

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                   ' &:hover': {
                        backgroundColor: '#ADD0C0',
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    height: height,
                    borderRadius: borderRadius,
                    padding: padding,
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    height: height,
                    borderRadius: borderRadius,
                    padding: padding,
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    fontSize: '10px',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: '13px',
                },
            },
        },
    },
};


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#a1a9ab',
        },
        text: {
            primary: '#ffffff',
            secondary: '#a1a9ab',
        },
    },
    ...textFieldStyles,
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        text: {
            primary: '#000000',
            secondary: '#888484',
        },
    },
    ...textFieldStyles,
});
