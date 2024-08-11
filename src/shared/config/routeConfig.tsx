import { RouteProps } from 'react-router-dom'
import {HomePage} from "@/pages/HomePage";
import {NotFoundPage} from "@/pages/NotFoundPage";
import {RocketDetails} from "@/pages/RocketDetailsPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    //Public
    HOME = 'home',
    ROCKET_DETAILS = 'rocket_details',

    //Private

    //LAST ROUTE
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.ROCKET_DETAILS]: '/details/', //+ id

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
        element: <RocketDetails/>,
    },

    //LAST ROUTE
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}
