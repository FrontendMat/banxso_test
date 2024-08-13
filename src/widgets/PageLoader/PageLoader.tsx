import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './PageLoader.module.scss';
import {memo} from "react";
import {VStack} from "@/shared/ui/Stack";
import {Loader} from "@/shared/ui/Loader/Loader";

interface PageLoaderProps {
    className?: string
}

export const PageLoader = memo((props: PageLoaderProps) => {
    const {
        className,
    } = props;

    return (
        <VStack justify={'center'} align={'center'} className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </VStack>
    );
});
