import { Box, CardMedia, Typography, useTheme } from '@mui/material';

function ItemDevMyAgency() {
    const theme = useTheme();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 8, mb: 2 }}>
            <CardMedia component="img" src="/src/images/content/agency01.png" sx={{ width: 80, height: 80, mb: 1 }} />
            <Typography>AGENCY 01</Typography>
        </Box>
    );
}

export default ItemDevMyAgency;
