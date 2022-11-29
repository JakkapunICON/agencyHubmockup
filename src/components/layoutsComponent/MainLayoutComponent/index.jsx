import { useTheme, useMediaQuery } from '@mui/material';

// project import
import MainLayoutDesktop from './MainLayoutDesktop';
import MainLayoutMobile from './MainLayoutMobile';

// ==============================|| MainLayoutComponent ||============================== //

function MainLayoutComponent() {
    const theme = useTheme();
    const matchesMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return <>{!matchesMobile ? <MainLayoutDesktop /> : <MainLayoutMobile />}</>;
}

export default MainLayoutComponent;
