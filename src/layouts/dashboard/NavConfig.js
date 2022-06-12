// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfigAdmin = [
  {
    title: 'Doanh thu',
    path: '/admin/turnover',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Nhân viên',
    path: '/admin/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Danh sách bất động sản',
    path: '/admin/products',
    icon: getIcon('material-symbols:real-estate-agent'),
  },
];
const navConfigUserDC = [
  {
    title: 'Danh sách bài đăng',
    path: '/userdc/list-products',
    icon: getIcon('material-symbols:real-estate-agent'),
  },
  {
    title: 'KPI',
    path: '/userdc/kpi',
    icon: getIcon('eva:people-fill'),
  },
];
const navConfigUserDK = [
  {
    title: 'Danh sách Bất động sản',
    path: '/userdk/list-products',
    icon: getIcon('material-symbols:real-estate-agent'),
  },
  {
    title: 'KPI',
    path: '/userdk/kpi',
    icon: getIcon('eva:people-fill'),
  },
];
const navConfig = { navConfigAdmin, navConfigUserDC, navConfigUserDK };
export default navConfig;
