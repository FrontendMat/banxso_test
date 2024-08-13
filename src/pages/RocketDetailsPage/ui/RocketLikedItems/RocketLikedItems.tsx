import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RocketLikedItems.module.scss';
import {memo} from "react";
import {HStack, VStack} from "@/shared/ui/Stack";
import {useSelector} from "react-redux";
import {RocketCard} from "@/entities/Rocket";
import {findLikedRockets} from "../../lib/findLikedRockets";
import {getRocketData} from "@/entities/Rocket";
import {Liked} from "../../model/types/liked";
import {Text} from "@/shared/ui/Text/Text";
import {RoutePath} from "@/shared/config/routeConfig";
import {getUserAuthData} from "@/entities/User";

interface RocketLikedItemsProps {
    className?: string;
    data?: Liked[]
}

export const RocketLikedItems = memo((props: RocketLikedItemsProps) => {
    const {
        className,
        data
    } = props;
    const rockets = useSelector(getRocketData);
    const isAuth = useSelector(getUserAuthData);

    const likedId = data?.map(e => e.dataId || '');
    const likedItems = findLikedRockets(likedId, rockets);

    if (!isAuth) {
        return false;
    }

    let content;
    if (likedItems?.length === 0) {
        content = (
            <HStack gap={'24'} className={cls.list} align={'center'}>
                <Text align={'center'} size={'xl'} title={'Empty List((('} variant={'secondary'}/>
            </HStack>
        )
    } else if (likedItems && likedItems.length > 0) {
        content = (
            <HStack gap={'24'} className={cls.list} align={'center'}>
                {likedItems?.map(e => (
                    <RocketCard
                        route={RoutePath.rocket_details + e.id}
                        key={e.id}
                        rocket={e}
                    />
                ))}
            </HStack>
        )
    } else {
        content = (
            <HStack gap={'24'} className={cls.list} align={'center'}>
                <Text align={'center'} size={'xl'} title={'Something went Wrong!'} variant={'secondary'}/>
            </HStack>
        )
    }

    return (
        <VStack gap={'14'} className={classNames(cls.RocketLikedItems, {}, [className])}>
            <Text title={'Liked Rockets:'} size={'xl'} bold/>
            {content}
        </VStack>
    );
});
