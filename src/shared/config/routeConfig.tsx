import { RouteProps } from 'react-router-dom'
import {HomePage} from "@/pages/HomePage";
import {NotFoundPage} from "@/pages/NotFoundPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    //Public
    HOME = 'home',

    //Private

    //LAST ROUTE
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    //PUBLIC ROUTES
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePage/>,
    },

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
