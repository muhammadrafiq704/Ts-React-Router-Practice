import CategoryIcon from '@mui/icons-material/Category';
// import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import RoutesData from '../../routes/RoutesData';

const SidebarData = [
    {
        id: 1,
        title: 'Product',
        icon: CategoryIcon,
        path: RoutesData.PRODUCTS
    },
    {
        id: 1,
        title: 'Categories',
        icon: CategoryIcon ,
        path: RoutesData.CATEGORIES
    },
    // {   
    //     id: 2,
    //     title: 'Product Form',
    //     icon: SelfImprovementIcon ,
    //     path:RoutesData.CONTACT
    // },
    // {   
    //     id: 2,
    //     title: 'Product Single Form',
    //     icon: SelfImprovementIcon ,
    //     path:RoutesData.SINGLECONTACT
    // },

]
export default SidebarData