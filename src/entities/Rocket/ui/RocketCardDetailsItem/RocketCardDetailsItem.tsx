import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RocketCardDetailsItem.module.scss';
import {memo} from "react";
import {HStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";

interface RocketCardDetailsItemProps {
    className?: string;
    title?: string;

}

export const RocketCardDetailsItem = memo((props: RocketCardDetailsItemProps) => {
    const {
        className,
        title
    } = props;

    return (
        <HStack className={classNames(cls.RocketCardDetailsItem, {}, [className])}>
            <Text text={title} />
            <Text text={title} />
        </HStack>
    );
});
