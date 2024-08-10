import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './Header.module.scss';
import {memo} from "react";
import {Card} from "@/shared/ui/Card";
import {Text} from "@/shared/ui/Text/Text";
import {HeaderNav} from "@/widgets/Header/ui/HeaderHav/HeaderNav";

interface HeaderProps {
    className?: string
}

export const Header = memo((props: HeaderProps) => {
    const {
        className,
    } = props;

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Card padding={'text'} borderColor={'primary'} width={'fit_content'} >
                <Text title={'Logo'} size={'m'}/>
            </Card>
            <HeaderNav/>
            <Card padding={'text'} width={'fit_content'} >
                <Text title={'Contact form'} size={'m'}/>
            </Card>
        </header>
    );
});
