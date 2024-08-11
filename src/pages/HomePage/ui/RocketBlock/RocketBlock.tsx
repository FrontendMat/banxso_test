import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RocketBlock.module.scss';
import {memo} from "react";
import {Text} from "@/shared/ui/Text/Text";
import {HStack, VStack} from "@/shared/ui/Stack";
import {RocketCardList} from "@/entities/Rocket";

interface RocketBlockProps {
    className?: string
}

export const RocketBlock = memo((props: RocketBlockProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                align={'center'}
                title={'Our rockets'}
                size={'xxl'}
                className={cls.title}
                bold
            />
            <RocketCardList/>
            <HStack
                max
                className={cls.block}
                justify={'between'}
                align={'center'}
            >
                <VStack
                    gap={'4'}
                    justify={'center'}
                    align={'center'}
                >
                    <Text
                        title={'43'}
                        size={'xxl'}
                        bold
                    />
                    <Text
                        title={'TOTAL LAUNCHES'}
                        size={'xl'}
                    />
                </VStack>
                <VStack
                    gap={'4'}
                    justify={'center'}
                    align={'center'}
                >
                    <Text
                        title={'46'}
                        size={'xxl'}
                        bold
                    />
                    <Text
                        title={'VISITS TO THE ISS'}
                        size={'xl'}
                    />
                </VStack>
                <VStack
                    gap={'4'}
                    justify={'center'}
                    align={'center'}
                >
                    <Text
                        title={'25'}
                        size={'xxl'}
                        bold
                    />
                    <Text
                        title={'TOTAL REFLIGHTS'}
                        size={'xl'}
                    />
                </VStack>
            </HStack>
        </div>
    );
});
