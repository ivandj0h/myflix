import {MenuListItem} from "@/app/interfaces/globalInterfaces";

export const MENU_LISTS: MenuListItem[] = [
    {
        id: '1',
        menuTitle: 'Home',
        pathTitle: 'dashboard',
        path: '/dashboard',
        icon: 'RiMovieFill'
    },
    {
        id: '2',
        menuTitle: 'Favourites',
        pathTitle: 'favourites',
        path: '/favourites',
        icon: 'FaHeart'
    },
    {
        id: '3',
        menuTitle: 'Search',
        pathTitle: 'search',
        path: '/search',
        icon: 'FaSearch'
    }
];
