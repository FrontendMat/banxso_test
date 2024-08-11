import {memo, useEffect} from "react";
import {useAppDispatch} from "@/shared/lib/hooks/redux";
import {useSelector} from "react-redux";
import {getRocketData, getRocketInited} from "../../model/selectors/getRocketData";
import {fetchRocketData} from "../../model/services/fetchRocketData";
import {RocketCard} from "../RocketCard/RocketCard";
import {CustomSwiper} from "@/shared/ui/Swiper";
import {Rocket} from "../../model/types/rocket";
import {RoutePath} from "@/shared/config/routeConfig";

export const RocketCardList = memo(() => {
    const dispatch = useAppDispatch();
    const rockets = useSelector(getRocketData);
    const isLoading = useSelector(getRocketData);
    const error = useSelector(getRocketData);
    const inited = useSelector(getRocketInited);

    useEffect(() => {
        dispatch(fetchRocketData());
    }, [dispatch])

    const array = rockets.map((rocket: Rocket) => (
        <RocketCard
            route={RoutePath.rocket_details + rocket?.id}
            key={rocket.id}
            rocket={rocket}
        />
    ))

    return (
        <div>
            {inited && <CustomSwiper sliders={array}/>}
        </div>
    );
});
