import SectionMain02 from '../../_publicComponent/SectionMain02';

import { styled, useTheme, Box } from '@mui/material';

import iconmain01 from '/src/images/agency/iconmain01.png';

function ApplyAgencyComponent() {
    return (
        <AgencyComponentStyled>
            <SectionMain02 src={iconmain01} page="agency" />
        </AgencyComponentStyled>
    );
}

export default ApplyAgencyComponent;

const AgencyComponentStyled = styled(Box)(({ theme }) => ({
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
