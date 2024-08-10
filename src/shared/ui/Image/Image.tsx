import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Image.module.scss';
import {memo} from "react";
import RocketGIF from '@/shared/assets/rocket.gif';

interface ImageProps {
    className?: string;
    src?: string;
}

export const Image = memo((props: ImageProps) => {
    const {
        className,
        src = RocketGIF,
    } = props;

    return (
        <img
            src={src}
            className={classNames(cls.Image, {}, [className])}
            alt={src}
        />
    );
});
