//  main color
export const Colors = {
    primary: '#0B1D26',
    secondary: '#961619',
    success: '#27AE60',
    white: '#FFFFFF',
    background: '#F8F9FA',
    textGray: '#9E9E9E'
};

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => ({
    mode,
    primary: {
        main: Colors.primary
    },
    secondary: {
        main: Colors.secondary
    },
    success: {
        main: Colors.success,
        contrastText: Colors.white
    },
    gray: {
        main: Colors.gray
    },
    white: {
        main: Colors.white
    },
    background: {
        main: Colors.background
    },
    text: {
        white: Colors.white,
        primary: Colors.primary,
        secondary: Colors.secondary,
        gray: Colors.textGray
    }
});

export default Palette;
