import { Box, CardMedia, Typography, useTheme } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import dev01 from '/src/images/content/dev01.png';

function ItemDev({ number }) {
    const theme = useTheme();
    return (
        <Box
            component={RouterLink}
            to="/agencyHubmockup/mydev"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                mr: 8,
                mb: 2,
                ':hover': {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <CardMedia component="img" src={dev01} sx={{ width: 80, height: 80, mb: 1 }} />
            <Typography sx={{ color: '#FFFFFF' }}>Dev {number}</Typography>
        </Box>
    );
}

export default ItemDev;
