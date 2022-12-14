import { Box, useTheme, styled, CardMedia, Typography } from '@mui/material';

import vectorproject01 from '/src/images/vector/vectorproject01.svg';

function DevSearchButtonSelect({ sx }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '60px',
                minWidth: '200px',
                marginRight: theme.spacing(4),
                paddingX: theme.spacing(4),
                borderRadius: '50px',
                background: '#FFFFFF',
                ...sx
            }}
        >
            <CardMedia component="img" src={vectorproject01} alt="" sx={{ width: 31, marginRight: theme.spacing(2) }} />
            <Typography sx={{ fontWeight: 700 }}>บ้านเดี่ยว</Typography>
        </Box>
    );
}

export default DevSearchButtonSelect;
