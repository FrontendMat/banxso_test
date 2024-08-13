import {classNames} from "@/shared/lib/classNames/classNames";
import {Suspense} from "react";
import {Modal} from "@/shared/ui/Modal/Modal";
import {Loader} from "@/shared/ui/Loader/Loader";
import {AuthFormAsync} from "../AuthForm/AuthForm.async";

interface AuthModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AuthModal = ({ className, isOpen, onClose }: AuthModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <AuthFormAsync
                onClose={onClose}
            />
        </Suspense>
    </Modal>
)
