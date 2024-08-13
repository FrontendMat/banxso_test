import {memo, ReactNode, useRef} from "react";
import {SwiperSlide, Swiper} from "swiper/react";
import cls from './CustomSwiper.module.scss';
import 'swiper/css';
import {SwiperButtons} from "../SwiperButton/SwiperButtons";
import {Card} from "@/shared/ui/Card";
import {Image} from "@/shared/ui/Image/Image";
import ArrowR from "@/shared/assets/arrow_right.png";
import ArrowL from "@/shared/assets/arrow_left.png";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Button} from "@/shared/ui/Button/Button";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

interface SwiperProps {
    className?: string;
    slidesPerView?: number;
    sliders: ReactNode[];
    block?: ReactNode;
    buttonsAbsolute?: boolean
}

export const CustomSwiper = memo((props: SwiperProps) => {
    const {
        className,
        slidesPerView = 3,
        buttonsAbsolute,
        block,
        sliders
    } = props;
    const swiperRef = useRef<any>(null);

    const slideNext = () => {
        swiperRef.current?.swiper.slideNext();
    };

    const slidePrev = () => {
        swiperRef.current?.swiper.slidePrev();
    };

    return (
        <>
            {block &&
                <VStack className={cls.fixedSlide}>
                    {block}
                    <HStack
                        align={'center'}
                        className={cls.btnWrapper}
                        gap={'14'}
                    >
                        <Button
                            onClick={slidePrev}
                            square
                            clear
                        >
                            <Card
                                color={'primary'}
                                radius={'m'}
                                className={cls.button}
                            >
                                <Image
                                    src={ArrowL}
                                    className={cls.arrow}
                                />
                            </Card>
                        </Button>
                        <Button
                            square
                            clear
                            onClick={slideNext}
                        >
                            <Card
                                radius={'m'}
                                className={cls.button}
                            >
                                <Image
                                    src={ArrowR}
                                    className={cls.arrow}
                                />
                            </Card>
                        </Button>
                    </HStack>
                </VStack>
            }
            <Swiper
                loop
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                className={cls.swiper}
                ref={swiperRef}
                spaceBetween={24}
                slidesPerView={slidesPerView}
            >
                {sliders.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {slide}
                    </SwiperSlide>
                ))}
                {!block && <SwiperButtons absolute={buttonsAbsolute}/>}
            </Swiper>
        </>
    );
});