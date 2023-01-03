import { Box, CardMedia, Typography, useTheme } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

function ItemDevMyAgency({ number }) {
    const theme = useTheme();
    return (
        <Box
            component={RouterLink}
            to="/"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mr: 8,
                mb: 2,
                textDecoration: 'none',
                color: theme.palette.primary.main,
                ':hover': {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <CardMedia component="img" src="/src/images/content/agency01.png" sx={{ width: 80, height: 80, mb: 1 }} />
            <Typography>AGENCY {number}</Typography>
        </Box>
    );
}

export default ItemDevMyAgency;
