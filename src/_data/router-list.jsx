import { Navigate } from 'react-router-dom';

// project import
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import PreownedPage from '../pages/Pre-ownedPage';
import RentPage from '../pages/RentPage';
import AboutPage from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MyDev from '../pages/_newsPage/MyDev';
import AddCustomer from '../pages/_newsPage/AddCustomer';
import DevProjectSearch from '../pages/_newsPage/MyDev/DevProjectSearch';
import AgencySearch from '../pages/_newsPage/ApplyAgency/AgencySearch';
import ApplyAgency from '../pages/_newsPage/ApplyAgency';
import ApplyDeveloper from '../pages/_newsPage/ApplyDeveloper';
import DeveloperSearch from '../pages/_newsPage/ApplyDeveloper/DeveloperSearch';
import Filter from '../pages/_newsPage/Filter';

export const MAIN_ROUTER = [
    {
        path: '/agencyHubmockup',
        element: <HomePage />
    },
    {
        path: '/agencyHubmockup/home',
        element: <Navigate to="/" />
    },

    {
        path: '/agencyHubmockup/pre-owned',
        element: <PreownedPage />
    },

    {
        path: '/agencyHubmockup/rent',
        element: <RentPage />
    },
    {
        path: '/agencyHubmockup/about',
        element: <AboutPage />
    },
    {
        path: '/agencyHubmockup/contact',
        element: <ContactPage />
    },
    // NEW PAGE
    {
        path: '/agencyHubmockup/addcustomer',
        element: <AddCustomer />
    },
    {
        path: '/agencyHubmockup/mydev',
        element: <MyDev />
    },
    {
        path: '/agencyHubmockup/mydev/projectsearch',
        element: <DevProjectSearch />
    },

    {
        path: '/agencyHubmockup/agency/apply',
        element: <ApplyAgency />
    },
    {
        path: '/agencyHubmockup/agency/search',
        element: <AgencySearch />
    },
    {
        path: '/agencyHubmockup/developer/apply',
        element: <ApplyDeveloper />
    },
    {
        path: '/agencyHubmockup/developer/search',
        element: <DeveloperSearch />
    },
    {
        path: '/agencyHubmockup/filter',
        element: <Filter />
    }
];

export const AUTH_ROUTER = [
    {
        path: '/agencyHubmockup/login',
        element: <LoginPage />
    },
    {
        path: '/agencyHubmockup/register',
        element: <RegisterPage />
    }
];
