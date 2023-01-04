import { v4 as uuidv4 } from 'uuid';

export const HEADER_MENU = [
    {
        id: uuidv4(),
        href: '/agencyHubmockup/',
        title: 'หน้าแรก'
    },
    // {
    //     id: uuidv4(),
    //     href: '/agencyHubmockup/pre-owned',
    //     title: 'มือสอง'
    // },
    {
        id: uuidv4(),
        href: '/agencyHubmockup/filter',
        title: 'Filter'
    },
    // {
    //     id: uuidv4(),
    //     href: '/agencyHubmockup/rent',
    //     title: 'เช่า'
    // },
    {
        id: uuidv4(),
        href: '/agencyHubmockup/mydev',
        title: 'Mydev'
    },

    {
        id: uuidv4(),
        href: '/agencyHubmockup/about',
        title: 'เกี่ยวกับเรา'
    },
    {
        id: uuidv4(),
        href: '/agencyHubmockup/contact',
        title: 'ติดต่อเรา'
    }
];
