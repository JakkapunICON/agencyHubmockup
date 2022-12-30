import { Typography, Grid, Box, Card, CardContent, Button, Divider, useTheme, styled, CardMedia } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

// import project

import Section1Main from './Section1Main';
import Section2MyDeveloper from './Section2MyDeveloper';
import Section3MyAgency from './Section3MyAgency';
import Section4Project from './Section4Project';
import Section5Sell from './Section5Sell';
import Section6Home from './Section6Home';
import Section7AllReadyToSale from './Section7AllReadyToSale';

// ==============================|| HomeDesktop ||============================== //

function HomeDesktop() {
    const theme = useTheme();

    return (
        <>
            <Section1Main />
            <Section2MyDeveloper />
            <Section3MyAgency />
            <Section4Project />
            <Section5Sell />
            <Section6Home />
            <Section7AllReadyToSale />
        </>
    );
}

export default HomeDesktop;
