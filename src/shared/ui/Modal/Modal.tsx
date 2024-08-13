import {classNames, Mods} from "@/shared/lib/classNames/classNames";
import cls from './Modal.module.scss'
import React, {MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState} from "react";
import { Portal } from "@/shared/ui/Portal/Portal";
import {Card} from "@/shared/ui/Card";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        lazy,
        onClose
    } = props;
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }else if (!isOpen && isMounted) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                setIsClosing(false);
                setIsMounted(false);
            }, ANIMATION_DELAY);
        }
    }, [isOpen, isMounted])

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false);
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }

        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }, [closeHandler])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    if (lazy && !isMounted && !isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, 'app_modal'])}>
                <div className={cls.overlay}>
                    <Card
                        animate
                        borderColor={'secondary'}
                        radius={'l'}
                        padding={'24'}
                        className={cls.content}
                        onClick={onContentClick}
                    >
                        {children}
                    </Card>
                </div>
            </div>
        </Portal>
    );
};
