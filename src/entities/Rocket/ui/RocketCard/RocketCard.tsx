import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RocketCard.module.scss';
import {memo} from "react";
import {Card} from "@/shared/ui/Card";
import {Image} from "@/shared/ui/Image/Image";
import {VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {Rocket} from "../../model/types/rocket";
import {AppLink} from "@/shared/ui/AppLink/AppLink";
import {RocketCardInfo} from "../RocketCardInfo/RocketCardInfo";

interface RocketCardProps {
    className?: string;
    rocket?: Rocket;
    route: string
}

export const RocketCard = memo((props: RocketCardProps) => {
    const {
        className,
        rocket,
        route
    } = props;

    return (
        <AppLink to={route}>
            <Card
                padding={'24'}
                borderColor={'secondary'}
                className={classNames(cls.RocketCard, {}, [className])}>
                <VStack
                    gap={'14'}
                >
                    <Card
                        borderColor={'secondary'}
                        className={cls.imgWrapper}
                        padding={'0'}
                        radius={'m'}
                    >
                        <Image/>
                    </Card>
                    <Text
                        title={rocket?.name}
                        size={'l'}
                        bold
                    />
                    <RocketCardInfo rocket={rocket}/>
                </VStack>
            </Card>
        </AppLink>
    );
});
