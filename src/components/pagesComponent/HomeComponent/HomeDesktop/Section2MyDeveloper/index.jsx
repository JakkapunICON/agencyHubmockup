import React from 'react';

import { Typography, Grid, Box, Card, CardContent, Button, Divider, useTheme, styled, CardMedia, useMediaQuery } from '@mui/material';

import TypographyMyDeveloper from './TypographyMyDeveloper';
import ItemDev from './ItemDev';
import { WrapText } from '@mui/icons-material';

function Section2MyDeveloper() {
    const theme = useTheme();
    const matchesDown1400 = useMediaQuery('(max-width:1400px)');

    const Item = () => {
        let item = [];

        for (let i = 1; i <= 10; i++) {
            item.push(
                <React.Fragment key={i}>
                    <ItemDev number={i} />
                </React.Fragment>
            );
        }
        return item;
    };

    return (
        <BoxMyDeveloperComponentStyled component="section" matches={matchesDown1400 ? 1 : 0}>
            <BoxTypographyStyled matches={matchesDown1400 ? 1 : 0}>
                <TypographyMyDeveloper />
            </BoxTypographyStyled>
            <BoxItemDevStyled matches={matchesDown1400 ? 1 : 0}>{Item()}</BoxItemDevStyled>
        </BoxMyDeveloperComponentStyled>
    );
}

export default Section2MyDeveloper;

const BoxMyDeveloperComponentStyled = styled(Box)(({ theme, matches }) => ({
    display: 'flex',
    flexDirection: matches === 0 ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(12),
    background: 'linear-gradient(180deg, #0B1D26 0%, #4F6874 100%)'
}));

const BoxTypographyStyled = styled(Box)(({ theme, matches }) => ({
    width: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: matches === 0 ? theme.spacing(6) : theme.spacing(0),
    marginRight: matches === 0 ? theme.spacing(16) : theme.spacing(0),
    marginBottom: theme.spacing(10)
}));

const BoxItemDevStyled = styled(Box)(({ theme, matches }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: matches === 0 ? theme.spacing(0) : theme.spacing(6)
}));
