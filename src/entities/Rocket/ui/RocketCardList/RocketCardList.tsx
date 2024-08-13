import {memo, useEffect, useState} from "react";
import {useAppDispatch} from "@/shared/lib/hooks/redux";
import {useSelector} from "react-redux";
import {getRocketData} from "../../model/selectors/getRocketData";
import {fetchRocketData} from "../../model/services/fetchRocketData";
import {RocketCard} from "../RocketCard/RocketCard";
import {CustomSwiper} from "@/shared/ui/Swiper";
import {Rocket} from "../../model/types/rocket";
import {RoutePath} from "@/shared/config/routeConfig";
import {HStack} from "@/shared/ui/Stack";
import {Skeleton} from "@/shared/ui/Skeleton/Skeleton";

export const RocketCardList = memo(() => {
    const dispatch = useAppDispatch();
    const rockets = useSelector(getRocketData);
    const isLoading = useSelector(getRocketData);
    const error = useSelector(getRocketData);
    const [isNewLoading, setIsNewLoading] = useState();

    if (rockets.length === 0) {
        // setIsNewLoading(true)
    }

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

    let content;
    if (rockets.length === 0) {
        content = (
            <HStack max gap={'24'}>
                <Skeleton width={427} height={500} border={'24px'}/>
                <Skeleton width={427} height={500} border={'24px'}/>
                <Skeleton width={427} height={500} border={'24px'}/>
            </HStack>
        )
    } else {
        content = (
            <div>
                <CustomSwiper sliders={array}/>
            </div>
        )
    }

    return (
        <>
            {content}
        </>
    );
});
