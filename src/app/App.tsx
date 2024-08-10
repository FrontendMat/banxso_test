import {Suspense} from "react";
import {AppRouter} from "@/app/providers/router";

const App = () => {
    return (
        <div className={'app'}>
            <Suspense fallback="">
                <AppRouter/>
            </Suspense>
        </div>
    )
}

export default App
