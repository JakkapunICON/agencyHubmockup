import { Box, Grid, Typography, useTheme } from '@mui/material';
import CardAllReadyToSale from './CardAllReadyToSale';

function AllReadyToSale() {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ px: 8, py: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '50px', lineHeight: '68px' }}>All Ready to sale</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: '24px', lineHeight: '33px' }}>ดูทั้งหมด {'>'}</Typography>
                </Box>

                <Grid container spacing={1}>
                    <Grid item>
                        <CardAllReadyToSale />
                    </Grid>
                    <Grid item>
                        <CardAllReadyToSale />
                    </Grid>
                    <Grid item>
                        <CardAllReadyToSale />
                    </Grid>
                    <Grid item>
                        <CardAllReadyToSale />
                    </Grid>
                    <Grid item>
                        <CardAllReadyToSale />
                    </Grid>
                    <Grid item>
                        <CardAllReadyToSale />
                    </Grid>
                    <Grid item>
                        <CardAllReadyToSale />
                    </Grid>
                    <Grid item>
                        <CardAllReadyToSale />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default AllReadyToSale;
