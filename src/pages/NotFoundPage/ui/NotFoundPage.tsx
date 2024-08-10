import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './NotFoundPage.module.scss';
import {memo} from "react";
import {Text} from "@/shared/ui/Text/Text";
import {VStack} from "@/shared/ui/Stack";

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
    const {
        className,
    } = props;

    return (
        <VStack maxHeight align={'center'} justify={'center'} className={classNames('', {}, [className])}>
            <Text title={'Page is Not Found('} size={'l'}/>
        </VStack>
    );
});

export default NotFoundPage;