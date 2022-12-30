import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
import CardAllReadyToSale from './CardAllReadyToSale';

import React from 'react';

function AllReadyToSale() {
    const theme = useTheme();
    const matches800 = useMediaQuery('(max-width:800px)');

    const GridItem = () => {
        let item = [];

        for (let i = 1; i <= 12; i++) {
            if (matches800 === false) {
                item.push(
                    <React.Fragment key={i}>
                        <Grid item>
                            <CardAllReadyToSale />
                        </Grid>
                    </React.Fragment>
                );
            }
        }
        return item;
    };

    return (
        <>
            <Box sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '50px', lineHeight: '68px' }}>All Ready to sale</Typography>
                    <Typography sx={{ fontWeight: 400, fontSize: '24px', lineHeight: '33px' }}>ดูทั้งหมด {'>'}</Typography>
                </Box>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    {GridItem()}
                </Grid>
            </Box>
        </>
    );
}

export default AllReadyToSale;
