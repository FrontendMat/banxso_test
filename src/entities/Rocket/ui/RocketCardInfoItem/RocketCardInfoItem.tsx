import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RocketCardInfoItem.module.scss';
import {memo} from "react";
import {HStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";

interface RocketCardDetailsItemProps {
    className?: string;
    title?: string;
    value?: string
}

export const RocketCardInfoItem = memo((props: RocketCardDetailsItemProps) => {
    const {
        className,
        title= 'no data',
        value = 'no data'
    } = props;

    return (
        <HStack
            justify={'between'} 
            max
            className={classNames(cls.RocketCardInfoItem, {}, [className])}
        >
            <Text text={title} />
            <Text text={value} />
        </HStack>
    );
});
