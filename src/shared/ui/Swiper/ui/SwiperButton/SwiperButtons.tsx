import {memo} from "react";
import cls from "./SwiperButtons.module.scss";
import {Button, ButtonTheme} from "@/shared/ui/Button/Button";
import {useSwiper} from 'swiper/react';
import {HStack} from "@/shared/ui/Stack";
import PrevImg from '@/shared/assets/arr_l_w.png';
import NextImg from '@/shared/assets/arr_r_w.png';
import {Image} from "@/shared/ui/Image/Image";
import {classNames, Mods} from "@/shared/lib/classNames/classNames";

interface SwiperButtonProps {
    className?: string;
    absolute?: boolean;
}

export const SwiperButtons = memo((props: SwiperButtonProps) => {
    const {
        className,
        absolute
    } = props;
    const swiper = useSwiper();
    const onPrev = () => swiper.slidePrev();
    const onNext = () => swiper.slideNext();

    const mods: Mods = {
        [cls.absolute]: absolute
    }

    return (
        <HStack
            max
            justify={'between'}
            className={classNames(cls.SwiperButtons, mods, [className])}
        >
            <Button
                theme={ButtonTheme.CLEAR}
                className={cls.btn}
                onClick={onPrev}
            >
                <Image src={PrevImg}/>
            </Button>
            <Button
                theme={ButtonTheme.CLEAR}
                className={className}
                onClick={onNext}
            >
                <Image src={NextImg}/>
            </Button>
        </HStack>
    );
});
