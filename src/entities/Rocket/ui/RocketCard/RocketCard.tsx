import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RocketCard.module.scss';
import {memo} from "react";
import {Card} from "@/shared/ui/Card";
import {Image} from "@/shared/ui/Image/Image";
import {VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {RocketCardDetails} from "@/entities/Rocket/ui/RocketCardDetails/RocketCardDetails";

interface RocketCardProps {
    className?: string
}

export const RocketCard = memo((props: RocketCardProps) => {
    const {
        className,
    } = props;

    return (
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
                    title={'Rocket 1'}
                    size={'l'}
                    bold
                />
                <RocketCardDetails/>
            </VStack>
        </Card>
    );
});
