import RoutesData from '../../routes/RoutesData';
import { AiFillProduct } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";

interface SidebarItem {
    id: number;
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: React.ComponentType<any>; // React Node for JSX elements
    path: string;
}

const SidebarData: SidebarItem[] = [
    {
        id: 1,
        title: 'Product',
        icon: AiFillProduct  , 
        path: RoutesData.PRODUCTS,
    },
    {
        id: 2,
        title: 'Categories',
        icon: BiSolidCategoryAlt , 
        path: RoutesData.CATEGORIES,
    },
];

export default SidebarData;
