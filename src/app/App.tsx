import {Suspense} from "react";
import {AppRouter} from "@/app/providers/router";
import {InformBlock} from "@/widgets/InformBlock";
import {Header} from "@/widgets/Header";
import {useLocation} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig";
import {Page} from "@/shared/ui/Page/Page";

const App = () => {
    const location = useLocation();
    const isMainPage = location.pathname === RoutePath.home;

    return (
        <div className={'app'}>
            <Suspense fallback="">
                <Page>
                    {!isMainPage && 
                        <Header 
                            isntMainPage
                        />
                    }
                    <AppRouter/>
                </Page>
                <InformBlock/>
            </Suspense>
        </div>
    )
}

export default App
