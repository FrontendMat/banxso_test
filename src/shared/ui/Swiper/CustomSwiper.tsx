import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './CustomSwiper.module.scss';
import {memo, ReactNode} from "react";
import {SwiperSlide, Swiper} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

interface SwiperProps {
    className?: string;
    slidesPerView?: number;
    sliders: ReactNode[];
}

export const CustomSwiper = memo((props: SwiperProps) => {
    const {
        className,
        slidesPerView = 3,
        sliders
    } = props;

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={slidesPerView}
            pagination={{ clickable: true }}
            navigation
        >
            {sliders.map((slide, index) => (
                <SwiperSlide className={cls.item} key={index}>
                    {slide}
                </SwiperSlide>
            ))}
        </Swiper>
    );
});