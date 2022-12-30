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

export const MAIN_ROUTER = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/home',
        element: <Navigate to="/" />
    },

    {
        path: '/pre-owned',
        element: <PreownedPage />
    },
    {
        path: '/rent',
        element: <RentPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    // NEW PAGE
    {
        path: '/addcustomer',
        element: <AddCustomer />
    },
    {
        path: '/mydev',
        element: <MyDev />
    },
    {
        path: '/mydev/projectsearch',
        element: <DevProjectSearch />
    },

    {
        path: '/agency/apply',
        element: <ApplyAgency />
    },
    {
        path: '/agency/search',
        element: <AgencySearch />
    },
    {
        path: '/developer/apply',
        element: <ApplyDeveloper />
    },
    {
        path: '/developer/search',
        element: <DeveloperSearch />
    }
];

export const AUTH_ROUTER = [
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
];
