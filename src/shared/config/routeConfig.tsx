import { RouteProps } from 'react-router-dom'
import {HomePage} from "@/pages/HomePage";
import {NotFoundPage} from "@/pages/NotFoundPage";
import {RocketDetailsPage} from "@/pages/RocketDetailsPage";
import {UserPage} from "@/pages/UserPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    //Public
    HOME = 'home',
    ROCKET_DETAILS = 'rocket_details',

    //Private
    USER = 'user',

    //LAST ROUTE
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ROCKET_DETAILS]: '/details/', //+ id
    [AppRoutes.USER]: '/user/', //+ id

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    //PUBLIC ROUTES
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>,
    },
    [AppRoutes.ROCKET_DETAILS]: {
        path: `${RoutePath.rocket_details}:id`,
        element: <RocketDetailsPage/>,
    },

    //PRIVATE
    [AppRoutes.USER]: {
        path: `${RoutePath.user}:id`,
        element: <UserPage/>,
        authOnly: true
    },

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
