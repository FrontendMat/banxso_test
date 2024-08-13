import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from './Input.module.scss'
import React, {InputHTMLAttributes, memo} from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'required'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
    maxWidth?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value = '',
        onChange,
        type = 'text',
        placeholder,
        readonly,
        maxWidth = true,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
        [cls.max]: maxWidth
    };

    return (
        <input
            className={classNames(cls.input, mods, [className])}
            readOnly={readonly}
            type={type}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            {...otherProps}
        />
    );
});
