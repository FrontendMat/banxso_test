import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RocketCardDetails.module.scss';
import {memo} from "react";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";

interface RocketCardDetailsProps {
    className?: string;
}

export const RocketCardDetails = memo((props: RocketCardDetailsProps) => {
    const {
        className,
    } = props;

    return (
        <VStack
            max
            gap={'10'}
            className={classNames(cls.RocketCardDetails, {}, [className])}
        >
            <HStack
                className={cls.item}
                align={'center'}
                justify={'between'}
                max
            >
                <Text
                    text={'HEIGHT'}
                />
                <Text
                    text={'8.1' + ' m ' + '/' + '26.7' + ' ft '}
                />
            </HStack>
            <HStack
                className={cls.item}
                align={'center'}
                justify={'between'}
                max
            >
                <Text
                    text={'HEIGHT'}
                />
                <Text
                    text={'8.1' + ' m ' + '/' + '26.7' + ' ft '}
                />
            </HStack>
            <HStack
                className={cls.item}
                align={'center'}
                justify={'between'}
                max
            >
                <Text
                    text={'HEIGHT'}
                />
                <Text
                    text={'8.1' + ' m ' + '/' + '26.7' + ' ft '}
                />
            </HStack>
        </VStack>
    );
});
