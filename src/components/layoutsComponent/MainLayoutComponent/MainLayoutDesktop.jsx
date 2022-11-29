import { Outlet } from 'react-router-dom';
import { Container, Box, styled } from '@mui/material';

// project import
import Header from './Header';

// ==============================|| MainLayoutDesktop ||============================== //

function MainLayoutDesktop() {
    return (
        <ContainerStyled component="div" maxWidth="xl">
            <HeaderStyled component="header">
                <Header />
            </HeaderStyled>
            <MainStyled component="main">
                <Outlet />
            </MainStyled>
        </ContainerStyled>
    );
}

export default MainLayoutDesktop;

// ==============================|| MainLayoutDesktopStyled ||============================== //

const ContainerStyled = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.main
}));

const HeaderStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column'
}));

const MainStyled = styled(Box)(({ theme, src }) => ({
    display: 'flex',
    flexDirection: 'column'
    // paddingLeft: '40px',
    // paddingRight: '40px',
    // paddingTop: '20px'
}));
