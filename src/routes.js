import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
import ProductDC from './pages/ProductDC';
import KpiDC from './pages/KpiDC';
import KpiDK from './pages/KpiDK';
import ProductDK from './pages/ProductDK';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/admin',
      element: <DashboardLayout />,
      children: [
        { path: 'turnover', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/userdc',
      element: <DashboardLayout />,
      children: [
        { path: 'list-products', element: <ProductDC /> },
        { path: 'kpi', element: <KpiDC /> },
      ],
    },
    {
      path: '/userdk',
      element: <DashboardLayout />,
      children: [
        { path: 'list-products', element: <ProductDK /> },
        { path: 'kpi', element: <KpiDK /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
