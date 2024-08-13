import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    clear?: boolean;
    noHover?: boolean;
    square?: boolean;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        clear= false,
        square,
        noHover,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.clear]: clear,
        [cls.square]: square,
        [cls.noHover]: noHover,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
