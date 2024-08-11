import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, type LinkProps } from 'react-router-dom';
import {memo} from 'react';

interface AppLinkProps extends LinkProps {
    className?: string,
    fullWidth?: boolean
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        children,
        fullWidth,
        className,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.fullWidth]: fullWidth
    }

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, mods, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
});