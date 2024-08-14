import {Suspense, useEffect} from "react";
import {AppRouter} from "@/app/providers/router";
import {InformBlock} from "@/widgets/InformBlock";
import {Header} from "@/widgets/Header";
import {useLocation} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig";
import {Page} from "@/shared/ui/Page/Page";
import {checkIsUserAuth, getUserInited} from "@/entities/User";
import {useAppDispatch} from "@/shared/lib/hooks/redux";
import {useSelector} from "react-redux";

const App = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const isMainPage = location.pathname === RoutePath.home;

    useEffect(() => {
        dispatch(checkIsUserAuth())
    }, [dispatch]);

    return (
        <div className={'app'}>
            <Suspense fallback="">
                {!isMainPage && 
                    <Header
                        isntMainPage
                    />
                }
                <div className={'content'}>
                    {inited && <AppRouter/>}
                </div>
                <InformBlock/>
            </Suspense>
        </div>
    )
}

export default App
