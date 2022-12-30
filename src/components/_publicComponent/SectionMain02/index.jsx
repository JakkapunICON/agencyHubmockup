import { Box, useTheme, styled, Typography, Button, CardMedia } from '@mui/material';
import Mainagency from './Mainagency';
import Maindev from './Maindev';
import Maindeveloper from './Maindeveloper';

function SectionMain02({ src, page }) {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    width: '1156px',
                    height: '581.21px',
                    left: '240px',
                    top: '35px',
                    // background: 'blue',
                    borderRadius: '20px'
                }}
            >
                <CardMedia component="img" src={src} sx={{ width: '1156px' }} />
            </Box>
            {page === 'dev' ? <Maindev /> : page === 'developer' ? <Maindeveloper /> : <Mainagency />}
        </>
    );
}

export default SectionMain02;
