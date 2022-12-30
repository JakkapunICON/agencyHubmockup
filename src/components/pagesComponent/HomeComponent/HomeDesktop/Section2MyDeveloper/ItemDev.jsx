import { Box, CardMedia, Typography, useTheme } from '@mui/material';

function ItemDev() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 8,
                mb: 2
            }}
        >
            <CardMedia component="img" src="/src/images/content/dev01.png" sx={{ width: 80, height: 80, mb: 1 }} />
            <Typography sx={{ color: '#FFFFFF' }}>Dev01</Typography>
        </Box>
    );
}

export default ItemDev;
