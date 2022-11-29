import { Container, Box } from '@mui/material';

import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (
        <>
            <Container maxWidth="xl">
                <Box>Navbar login</Box>
                <Box>
                    <Outlet />
                </Box>
            </Container>
        </>
    );
}

export default AuthLayout;
