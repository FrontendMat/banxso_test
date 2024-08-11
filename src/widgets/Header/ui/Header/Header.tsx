import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from './Header.module.scss';
import {memo} from "react";
import {Card} from "@/shared/ui/Card";
import {Text} from "@/shared/ui/Text/Text";
import {HeaderNav} from "../HeaderHav/HeaderNav";

interface HeaderProps {
    className?: string;
    isntMainPage?: boolean
}

export const Header = memo((props: HeaderProps) => {
    const {
        className,
        isntMainPage
    } = props;

    const mods: Mods = {
        [cls.isMainPage]: isntMainPage
    }

    return (
        <header
            className={classNames(cls.Header, mods, [className])}
        >
            <Card
                padding={'text'}
                borderColor={'primary'}
                width={'fit_content'}
            >
                <Text
                    title={'Logo'}
                    size={'m'}
                />
            </Card>
            <HeaderNav/>
            <Card
                padding={'text'}
                width={'fit_content'}
            >
                <Text
                    title={'Contact form'}
                    size={'m'}
                />
            </Card>
        </header>
    );
});
