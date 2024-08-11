import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './TeamBlock.module.scss';
import {memo, useMemo} from "react";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {CustomSwiper} from "@/shared/ui/Swiper/ui/CustomSwiper/CustomSwiper";
import {PersonCard} from "@/entities/Person";

interface TeamBlockProps {
    className?: string
}

export const TeamBlock = memo((props: TeamBlockProps) => {
    const {
        className,
    } = props;

    const arr = useMemo(() => [
        <PersonCard/>,
        <PersonCard/>,
        <PersonCard/>,
        <PersonCard/>,
    ], [])

    return (
        <HStack
            maxHeight
            gap={'24'}
            className={classNames(cls.TeamBlock, {}, [className])}
        >
            <CustomSwiper
                sliders={arr}
                slidesPerView={2}
                block={
                    <VStack
                        gap={'24'}
                        max
                        className={cls.card}
                    >
                        <Text
                            title={'Team'}
                            bold
                            size={'xxl'}
                        />
                        <Text
                            uppercase={false}
                            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor sed urna a faucibus. Pellentesque mi nisl, mollis convallis metus id, congue semper neque. Sed suscipit eget ipsum ut gravida. Fusce'}
                        />
                    </VStack>
                }
            />
        </HStack>
    );
});
