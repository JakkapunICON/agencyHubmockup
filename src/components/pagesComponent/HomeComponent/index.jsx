import HomeDesktop from './HomeDesktop';
import HomeMobile from './HomeMobile';

// ==============================|| HomeComponent ||============================== //

function HomeComponent({ mobile }) {
    return <>{!mobile ? <HomeDesktop /> : <HomeMobile />}</>;
}

export default HomeComponent;
