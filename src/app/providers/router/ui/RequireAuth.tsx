import {useLocation, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RoutePath} from "@/shared/config/routeConfig";
import {getUserAuthData} from "@/entities/User";


export function RequireAuth({children}: {children: JSX.Element}) {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutePath.home} state={{from: location}} replace/>;
    }

    return children;
}