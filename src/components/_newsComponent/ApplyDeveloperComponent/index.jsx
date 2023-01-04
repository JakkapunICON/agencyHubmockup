import SectionMain02 from '../../_publicComponent/SectionMain02';

import { styled, useTheme, Box } from '@mui/material';

import imgMain01 from '/src/images/developer/imgMain01.png';

function ApplyDeveloperComponent() {
    return (
        <DeveloperComponentStyled>
            <SectionMain02 src={imgMain01} page="developer" />
        </DeveloperComponentStyled>
    );
}

export default ApplyDeveloperComponent;

const DeveloperComponentStyled = styled(Box)(({ theme }) => ({
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
