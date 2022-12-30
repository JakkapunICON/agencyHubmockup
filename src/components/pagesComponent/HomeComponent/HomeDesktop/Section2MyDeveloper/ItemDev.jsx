import { Box, CardMedia, Typography, useTheme } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

function ItemDev() {
    const theme = useTheme();
    return (
        <Box
            component={RouterLink}
            to="/mydev"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 8,
                mb: 2,
                ':hover': {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <CardMedia component="img" src="/src/images/content/dev01.png" sx={{ width: 80, height: 80, mb: 1 }} />
            <Typography sx={{ color: '#FFFFFF' }}>Dev01</Typography>
        </Box>
    );
}

export default ItemDev;
