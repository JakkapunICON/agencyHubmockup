import { Card, CardContent } from '@mui/material';

import image1 from '/src/images/content/image1.png';

// ==============================|| CardTitle ||============================== //

function CardTitle() {
    return (
        <Card
            variant="outlined"
            sx={{
                height: 547.8,
                borderRadius: 5,
                cursor: 'pointer',
                ':hover': {
                    transform: 'scale(1.01)'
                }
            }}
        >
            <CardContent sx={{ padding: 0, height: 547.8, width: 'auto' }}>
                <img src={image1} alt="image1" />
            </CardContent>
        </Card>
    );
}

export default CardTitle;
