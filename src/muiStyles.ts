import { createTheme } from '@mui/material/styles';

const height = '2vh';
const padding = '10px';
const borderRadius = '5px';

export const textFieldStyles = {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                   ' &:hover': {
                        backgroundColor: '#ADD0C0 !important',
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
                    fontSize: '10px',
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    minheight: height,
                    borderRadius: borderRadius,
                    padding: padding,
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                input: {
                    fontSize: '8px',
                    height: height,
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
