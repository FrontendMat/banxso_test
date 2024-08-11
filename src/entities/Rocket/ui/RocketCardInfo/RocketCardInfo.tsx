import {memo} from "react";
import {Rocket} from "../../model/types/rocket";
import {RocketCardInfoItem} from "../RocketCardInfoItem/RocketCardInfoItem";
import {transformRocketData} from "../../lib/transformRocketData";
import {VStack} from "@/shared/ui/Stack";

interface RocketCardInfoProps {
    rocket?: Rocket
}

export const RocketCardInfo = memo((props: RocketCardInfoProps) => {
    const {
        rocket
    } = props;
    const rocketInfo = transformRocketData(rocket);

    return (
        <VStack gap={'14'} max>
            {rocketInfo.map(item => (
                <RocketCardInfoItem
                    title={item.name}
                    value={item.value}
                />
            ))}
        </VStack>
    );
});
