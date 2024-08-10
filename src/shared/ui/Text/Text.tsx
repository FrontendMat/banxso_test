import { memo } from 'react';
import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'secondary';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    uppercase?: boolean;
    variant?: TextVariant;
    align?: TextAlign;
    size?: TextSize;
    bold?: boolean;
    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

const mapSizeToClass: Record<TextSize, string> = {
    m: cls.size_m,
    l: cls.size_l,
    xl: cls.size_xl,
    xxl: cls.size_xxl,
    xxxl: cls.size_xxxl
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    m: 'h5',
    l: 'h4',
    xl: 'h3',
    xxl: 'h2',
    xxxl: 'h1',
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        uppercase = true,
        title,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        'data-testid': dataTestId = 'Text',
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClasses = [className, cls[variant], cls[align], sizeClass];
    const mods: Mods = {
        [cls.bold]: bold,
        [cls.uppercase]: uppercase
    }

    return (
        <div
            className={classNames(
                cls.Text,
                mods,
                additionalClasses,
            )}
        >
            {title && (
                <HeaderTag
                    className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
                    {text}
                </p>
            )}
        </div>
    );
});
