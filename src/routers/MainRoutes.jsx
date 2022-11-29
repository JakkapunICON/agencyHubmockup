// project import
import MainLayout from '../layouts/MainLayout';
import { MAIN_ROUTER } from '../_data/router-list';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: MAIN_ROUTER
};

export default MainRoutes;
