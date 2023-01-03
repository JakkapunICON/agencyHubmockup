import { Typography, Grid, Box, Card, CardContent, Button, Divider, useTheme, styled, CardMedia, useMediaQuery } from '@mui/material';

import React from 'react';

import ItemDevMyAgency from './ItemDevMyAgency';
import TypographyMyAgency from './TypographyMyAgency';

function Section3MyAgency() {
    const theme = useTheme();
    const matchesDown1400 = useMediaQuery('(max-width:1400px)');

    const Item = () => {
        let item = [];

        for (let i = 1; i <= 10; i++) {
            item.push(
                <React.Fragment key={i}>
                    <ItemDevMyAgency number={i} />
                </React.Fragment>
            );
        }
        return item;
    };

    return (
        <BoxMyAgencyComponentStyled component="section" matches={matchesDown1400 ? 1 : 0}>
            <BoxItemDevStyled matches={matchesDown1400 ? 1 : 0} sx={{ order: matchesDown1400 === false ? 1 : 2 }}>
                {Item()}
                {/* <ItemDevMyAgency />
                <ItemDevMyAgency />
                <ItemDevMyAgency />
                <ItemDevMyAgency />
                <ItemDevMyAgency />
                <ItemDevMyAgency />
                <ItemDevMyAgency />
                <ItemDevMyAgency />
                <ItemDevMyAgency />
                <ItemDevMyAgency /> */}
            </BoxItemDevStyled>
            <BoxTypographyStyled matches={matchesDown1400 ? 1 : 0} sx={{ order: matchesDown1400 === false ? 2 : 1 }}>
                <TypographyMyAgency />
            </BoxTypographyStyled>
        </BoxMyAgencyComponentStyled>
    );
}

export default Section3MyAgency;

const BoxMyAgencyComponentStyled = styled(Box)(({ theme, matches }) => ({
    display: 'flex',
    flexDirection: matches === 0 ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    background: '#EEF2F4',
    padding: theme.spacing(12)
}));

const BoxItemDevStyled = styled(Box)(({ theme, matches }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(8),
    marginLeft: matches === 0 ? theme.spacing(0) : theme.spacing(6)
}));

const BoxTypographyStyled = styled(Box)(({ theme, matches }) => ({
    display: 'flex',
    width: '500px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: matches === 0 ? 'flex-start' : 'auto',
    marginLeft: matches === 0 ? theme.spacing(10) : theme.spacing(0),
    marginRight: matches === 0 ? theme.spacing(6) : theme.spacing(0),
    marginBottom: theme.spacing(8)
}));
