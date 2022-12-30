import { Box, useTheme, styled, Typography, Button, CardMedia } from '@mui/material';
import AllReadyToSale from '../../_publicComponent/AllReadyToSale';
import DevMain from './DevMain';
import DevProject from './DevProject';
import DevSearchMenu from './DevSearch';

function MyDevComponent() {
    const theme = useTheme();

    return (
        <>
            <DevComponentStyled>
                <DevMain />
            </DevComponentStyled>
            <DevMenuStyled>
                <DevSearchMenu />
            </DevMenuStyled>
            <DevProjectStyled>
                <DevProject />
            </DevProjectStyled>
            <AllReadyToSale />
        </>
    );
}

export default MyDevComponent;

const DevComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    justifyContent: 'start',
    alignItems: 'center',
    minHeight: '650px',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop: '20px'
}));

const DevMenuStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    background: '#EEF2F4',
    height: '257px'
}));

const DevProjectStyled = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '624px',
    background: theme.palette.primary.main
}));
