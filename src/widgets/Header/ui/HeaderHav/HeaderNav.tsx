import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './HeaderNav.module.scss';
import {memo} from "react";
import {HStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";

interface HeaderNavProps {
    className?: string
}

export const HeaderNav = memo((props: HeaderNavProps) => {
    const {
        className,
    } = props;

    return (
        <HStack align={'center'} gap={'40'} className={classNames(cls.HeaderNav, {}, [className])}>
            <Text title={'Home'} size={'m'}/>
            <Text title={'About'} size={'m'}/>
            <Text title={'QA'} size={'m'}/>
            <Text title={'Contact form'} size={'m'}/>
        </HStack>
    );
});
