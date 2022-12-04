import { Box, CardMedia, styled, Typography, useTheme } from '@mui/material';
import AllAgency from './AllAgency';
import AllDeverloper from './ALLDeverloper';

function Section6Home() {
    const theme = useTheme();

    return (
        <>
            <BoxSection6ComponentStyled>
                <Box sx={{ marginRight: theme.spacing(2) }}>
                    <AllAgency />
                </Box>
                <Box>
                    <AllDeverloper />
                </Box>
            </BoxSection6ComponentStyled>
            <br />
            <br />
        </>
    );
}

export default Section6Home;

const BoxSection6ComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    color: theme.palette.primary.main
}));
