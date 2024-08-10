import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './AboutBlock.module.scss';
import {memo} from "react";
import {Text} from "@/shared/ui/Text/Text";
import {VStack} from "@/shared/ui/Stack";
import {Card} from "@/shared/ui/Card";
import {Image} from "@/shared/ui/Image/Image";
import ShipImg from "@/shared/assets/ship.jpeg";
import PlayImg from "@/shared/assets/play.png";

interface AboutBlockProps {
    className?: string
}

export const AboutBlock = memo((props: AboutBlockProps) => {
    const {
        className,
    } = props;

    return (
        <VStack
            max
            justify={'center'}
            align={'center'}
            gap={'20'}
            className={classNames('cls.AboutBlock', {}, [className])}
        >
            <Text 
                title={'About us'}
                bold
                align={'center'}
                size={'xxl'}
            />
            <Card
                overflowHidden
                className={cls.card}
                padding={'0'}
                borderColor={'secondary'}
            >
                <Image
                    src={ShipImg}
                />
                <Image 
                    src={PlayImg} 
                    className={cls.btn_play}
                />
            </Card>
        </VStack>
    );
});
