import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "@/entities/User";
import {RoutePath} from "@/shared/config/routeConfig";

export const getHeaderNavItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: NavItem[] = [
            {
                route: RoutePath.home,
                title: 'Home',
            },
            {
                route: RoutePath.home,
                title: 'About',
            },
            {
                route: RoutePath.home,
                title: 'OA',
            },
            {
                route: RoutePath.home,
                title: 'Contact Form',
            },
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    route: RoutePath.user + userData._id,
                    title: 'Account',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
