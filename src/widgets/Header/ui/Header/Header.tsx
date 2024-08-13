import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from './Header.module.scss';
import {memo, useCallback, useState} from "react";
import {Card} from "@/shared/ui/Card";
import {Text} from "@/shared/ui/Text/Text";
import {HeaderNav} from "../HeaderHav/HeaderNav";
import {Button} from "@/shared/ui/Button/Button";
import {AuthModal} from "@/features/authByEmail";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User";
import {useAppDispatch} from "@/shared/lib/hooks/redux";
import {logoutAuth} from "@/entities/User";

interface HeaderProps {
    className?: string;
    isntMainPage?: boolean
}

export const Header = memo((props: HeaderProps) => {
    const {
        className,
        isntMainPage
    } = props;
    const [openModal, setOpenModal] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const onOpenModal = useCallback(() => {
        setOpenModal(true)
    }, [])

    const onCloseModal = useCallback(() => {
        setOpenModal(false)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(logoutAuth());
    },[dispatch])

    const mods: Mods = {
        [cls.isMainPage]: isntMainPage
    }

    return (
        <header
            className={classNames(cls.Header, mods, [className])}
        >
            <AuthModal
                onClose={onCloseModal}
                isOpen={openModal}
            />
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
            {isAuth
                ? <Button
                    onClick={onLogout}
                >
                    LOG OUT
                </Button>
                :<Button
                    onClick={onOpenModal}
                >
                    LOG IN
                </Button>
            }

        </header>
    );
});
