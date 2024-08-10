import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './FirstBlock.module.scss';
import {memo} from "react";
import RocketGIF from "@/shared/assets/rocket.gif";
import {Header} from "@/widgets/Header";
import {HStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import PlanetIcon from "@/shared/assets/planet.png";
import {Card} from "@/shared/ui/Card";
import {Image} from "@/shared/ui/Image/Image";

interface FirstComponentProps {
    className?: string
}

export const FirstBlock = memo((props: FirstComponentProps) => {
    const {
        className,
    } = props;

    return (
        <Card
            padding={'24'}
            className={classNames('', {}, [className])}
            borderColor={'secondary'}
        >
            <div
                className={cls.gif_wrapper}
                style={{backgroundImage: `url(${RocketGIF})`}}
            >
                <Header/>
                <HStack
                    className={cls.container}
                    justify={'between'}
                    align={'center'}
                >
                    <Text
                        title={'dive deep in to the future'}
                        size={'xxxl'}
                        bold
                        className={cls.title}
                    />
                </HStack>
            </div>
            <HStack gap={'32'} align={'center'}>
                <Image src={PlanetIcon} className={cls.planet}/>
                <div className={cls.line}/>
            </HStack>
        </Card>
    );
});
