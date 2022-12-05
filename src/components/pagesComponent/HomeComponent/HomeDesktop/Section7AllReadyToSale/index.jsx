import { Box, Typography, useTheme } from '@mui/material';
import CardAllReadyToSale from '../Section7AllReadyToSale/CardAllReadyToSale';

function Section7AllReadyToSale() {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ paddingX: theme.spacing(10), paddingY: theme.spacing(4) }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: theme.spacing(4) }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '50px', lineHeight: '68px' }}>All Ready to sale</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: '24px', lineHeight: '33px' }}>ดูทั้งหมด {'>'}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ paddingRight: theme.spacing(1) }}>
                        <CardAllReadyToSale />
                    </Box>
                    <Box sx={{ paddingRight: theme.spacing(1) }}>
                        <CardAllReadyToSale />
                    </Box>
                    <Box sx={{ paddingRight: theme.spacing(1) }}>
                        <CardAllReadyToSale />
                    </Box>
                    <Box sx={{ paddingRight: theme.spacing(1) }}>
                        <CardAllReadyToSale />
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Section7AllReadyToSale;
