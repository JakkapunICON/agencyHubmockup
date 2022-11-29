import { Box, Card, CardContent } from '@mui/material';

import imageCard1 from '/src/images/content/imageCard1.png';

// ==============================|| CardContentImg ||============================== //

function CardContentImg() {
    return (
        <Box sx={{ width: '287px', height: '197px' }}>
            <img src={imageCard1} alt="imageCard1" style={{ width: 'auto', marginLeft: '-16px', marginTop: '-12px', height: 'auto' }} />
        </Box>
    );
}

export default CardContentImg;
