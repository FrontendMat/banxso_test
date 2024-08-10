import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './RocketBlock.module.scss';
import {memo, useMemo} from "react";
import {Text} from "@/shared/ui/Text/Text";
import {HStack, VStack} from "@/shared/ui/Stack";
import {CustomSwiper} from "@/shared/ui/Swiper/CustomSwiper";
import {RocketCard} from "@/entities/Rocket/ui/RocketCard/RocketCard";

interface RocketBlockProps {
    className?: string
}

export const RocketBlock = memo((props: RocketBlockProps) => {
    const {
        className,
    } = props;

    const arr = useMemo(() => [
        <RocketCard/>,
        <RocketCard/>,
        <RocketCard/>,
        <RocketCard/>
    ], []);

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                align={'center'}
                title={'Our rockets'}
                size={'xxl'}
                className={cls.title}
                bold
            />
            <CustomSwiper sliders={arr}/>
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
