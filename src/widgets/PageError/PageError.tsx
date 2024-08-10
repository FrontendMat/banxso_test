import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './PageError.module.scss';
import React, {memo, useCallback} from "react";
import {Card} from "@/shared/ui/Card";
import {Text} from '@/shared/ui/Text/Text';

interface PageErrorProps {
    className?: string;
    title?: string;
    text?: string;
    errorBoundary?: boolean
}

export const PageError = memo((props: PageErrorProps) => {
    const {
        className,
        text,
        errorBoundary
    } = props;

    const reloadPage = useCallback(() => {
        location.reload()
    }, [])

    if (errorBoundary) {
        return (
            <Card width={'max'} padding={'24'} maxHeight>
                <Text title={'Something went wrong'} size={'m'}/>
                <button onClick={reloadPage}>Reload</button>
            </Card>
        );
    }

    return (
        <Card width={'max'} padding={'24'} maxHeight>
            <Text title={'Error'} size={'m'}/>
        </Card>
    );
});
