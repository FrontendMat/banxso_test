import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from './Card.module.scss';
import {HTMLAttributes, ReactNode} from "react";


export type CardWidth = 'max' | 'fit_content' | 'default';

export type CardPadding = '0' | '8' | '24' | '40' | '48' | 'icon' | 'text';

export type CardBorderColor = 'primary' | 'secondary';

export type CardBorder = 'm' | 'l';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    padding?: CardPadding;
    width?: CardWidth;
    overflowHidden?: boolean;
    maxHeight?: boolean;
    borderColor?: CardBorderColor;
    radius?: CardBorder;
    animate?: boolean;
}

const paddingClasses: Record<CardPadding, string> = {
    0: cls.padding0,
    8: cls.padding8,
    24: cls.padding24,
    48: cls.padding48,
    40: cls.padding40,
    icon: cls.paddingIcon,
    text: cls.paddingText
}

const widthClasses: Record<CardWidth, string> = {
    max: cls.max,
    fit_content: cls.fit_content,
    default: ''
}

const borderClasses: Record<CardBorder, string> = {
    m: cls.border_m,
    l: cls.border_l,
}

const borderColorClasses: Record<CardBorderColor, string> = {
    primary: cls.primary,
    secondary: cls.secondary,
}

export const Card = (props: CardProps) => {
    const {
        className,
        padding= '24',
        children,
        radius = 'l',
        animate,
        overflowHidden= false,
        width = 'default',
        borderColor= 'primary',
        maxHeight
    } = props;

    const additional = [
        className,
        paddingClasses[padding],
        borderColorClasses[borderColor],
        borderClasses[radius],
        widthClasses[width],
    ]

    const mods: Mods = {
        [cls.maxHeight]: maxHeight,
        [cls.overflowHidden]: overflowHidden,
        [cls.animate]: animate
    }

    return (
        <div className={classNames(cls.Card, mods, additional)}>
            {children}
        </div>
    );
};
