import { Box, styled, useTheme, Typography, CardMedia } from '@mui/material';

import BoxButtonSelection from './BoxButtonSelection';
import CardProject from './CardProject';

import vectorproject01 from '/src/images/vector/vectorproject01.svg';
import vectorproject02 from '/src/images/vector/vectorproject02.svg';
import vectorproject03 from '/src/images/vector/vectorproject03.svg';
import vectorproject04 from '/src/images/vector/vectorproject04.svg';

function Section4Project() {
    const theme = useTheme();

    return (
        <BoxProjectComponentStyled>
            <BoxProjectComponentINSIDEStyled>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '50px', fontWeight: 700, lineHeight: '68px' }}>Project</Typography>
                    <Typography sx={{ fontSize: '25px' }}>SEE MORE</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', overflowX: 'auto', pb: 0.5 }}>
                    <BoxButtonSelection imgSrc={vectorproject01} typography="บ้านเดี่ยว" />
                    <BoxButtonSelection imgSrc={vectorproject02} typography="บ้านแฝด" />
                    <BoxButtonSelection imgSrc={vectorproject02} typography="ทาวน์โฮม" />
                    <BoxButtonSelection imgSrc={vectorproject03} typography="คอนโด" />
                    <BoxButtonSelection imgSrc={vectorproject04} typography="อาคารพาณิชย์" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', overflowX: 'auto', pb: 0.5 }}>
                    <CardProject typography="Centro" />
                    <CardProject typography="The plant" />
                    <CardProject typography="ศุภาลัย ปาร์ค" />
                    <CardProject typography="Atoll" />
                    <CardProject typography="Atoll" />
                    <CardProject typography="Atoll" />
                </Box>
            </BoxProjectComponentINSIDEStyled>
        </BoxProjectComponentStyled>
    );
}

export default Section4Project;

const BoxProjectComponentStyled = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    // background: 'gray',
    color: '#FFFFFF'
}));

const BoxProjectComponentINSIDEStyled = styled(Box)(({ theme }) => ({
    padding: theme.spacing(6),
    marginTop: theme.spacing(-16),
    height: '448px',
    background: theme.palette.primary.main,
    borderRadius: '20px',
    boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.25)'
}));
