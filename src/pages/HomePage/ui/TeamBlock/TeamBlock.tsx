import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './TeamBlock.module.scss';
import {memo, useMemo} from "react";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {CustomSwiper} from "@/shared/ui/Swiper/CustomSwiper";
import {PersonCard} from "@/entities/Person";
import {Card} from "@/shared/ui/Card";
import ArrowL from "@/shared/assets/arrow_left.png";
import ArrowR from "@/shared/assets/arrow_right.png";
import {Image} from "@/shared/ui/Image/Image";

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
                <HStack
                    className={cls.pagination}
                    gap={'14'}
                >
                    <Card
                        radius={'m'}
                        className={cls.button}
                    >
                        <Image
                            src={ArrowL}
                            className={cls.arrow}
                        />
                    </Card>
                    <Card
                        radius={'m'}
                        className={cls.button}
                    >
                        <Image
                            src={ArrowR}
                            className={cls.arrow}
                        />
                    </Card>
                </HStack>
            </VStack>
            <CustomSwiper
                sliders={arr}
                slidesPerView={2}
            />
        </HStack>
    );
});
