import * as React from 'react';

import { Card, CardContent, CardMedia, useTheme, Box, MobileStepper, Button } from '@mui/material';

import image1 from '/src/images/content/image1.png';

import { KeyboardArrowLeft as KeyboardArrowLeftIcon, KeyboardArrowRight as KeyboardArrowRightIcon } from '@mui/icons-material';

// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'United States',
        imgPath: { image1 }
    },
    {
        label: 'Bird',
        imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
    }
];

// ==============================|| CardTitle ||============================== //

function CardTitle() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

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
            <CardContent sx={{ display: 'flex', justifyContent: 'center', position: 'relative', padding: 0, height: '547.8px', width: '888px' }}>
                <CardMedia component="img" src={image1} alt="image1" sx={{ position: 'absolute' }} />
                <Box sx={{ zIndex: 100, position: 'absolute', bottom: 10 }}>
                    <MobileStepper
                        sx={{ background: 'white', opacity: 0.7, width: '400px' }}
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                                Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
                                Back
                            </Button>
                        }
                    />
                </Box>
            </CardContent>
        </Card>
    );
}

export default CardTitle;
