import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './InformCard.module.scss';
import {memo} from "react";
import {VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {Image} from "@/shared/ui/Image/Image";

interface InformCardProps {
    className?: string;
    image?: string;
    title?: string;
    description?: string;
    isBlock?: boolean
}

export const InformCard = memo((props: InformCardProps) => {
    const {
        isBlock,
        className,
        title,
        description,
        image
    } = props;

    return (
        <div className={classNames(cls.InformCard, {[cls.isBlock]: isBlock}, [className])}>
            <VStack gap={'14'} className={cls.textBlock}>
                <Text
                    title={title}
                    bold
                    size={'xxl'}
                />
                <Text text={description} uppercase={false}/>
            </VStack>
            <Image src={image} />
        </div>
    );
});
