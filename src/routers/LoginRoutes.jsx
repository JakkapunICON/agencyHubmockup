// project import
import AuthLayout from '../layouts/AuthLayout';
import { AUTH_ROUTER } from '../_data/router-list';

const LoginRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: AUTH_ROUTER
};

export default LoginRoutes;
