import { Outlet } from 'react-router-dom';
import { Container, Box, styled, Typography } from '@mui/material';
import MenuBottom from './_Mobile/MenuBottom';

function MainLayoutMobile() {
    return (
        <ContainerStyled component="div" maxWidth="xl">
            <Typography sx={{ fontSize: '40px', ml: 4, mt: 4 }}>Mobile</Typography>
            <MenuBottom />
        </ContainerStyled>
    );
}

export default MainLayoutMobile;

const ContainerStyled = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    background: theme.palette.background.main
}));
