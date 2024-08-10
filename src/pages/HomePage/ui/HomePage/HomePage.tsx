import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './HomePage.module.scss';
import {memo} from "react";
import {RocketBlock} from "../RocketBlock/RocketBlock";
import {FirstBlock} from "../FIrstBlock/FirstBlock";
import {AboutBlock} from "../AboutBlock/AboutBlock";
import {TeamBlock} from "@/pages/HomePage/ui/TeamBlock/TeamBlock";
import {Image} from "@/shared/ui/Image/Image";
import RocketImg from "@/shared/assets/rocket_ph.jpeg";
import {VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";

interface MainPageProps {
    className?: string
}

const HomePage = memo((props: MainPageProps) => {
    const {
        className,
    } = props;

    return (
        <section className={classNames('cls.HomePage', {}, [className])}>
            <div className={cls.mainBlock}>
                <FirstBlock/>
                <RocketBlock className={cls.container}/>
                <AboutBlock className={cls.container}/>
                <TeamBlock className={cls.container}/>
            </div>
            <div className={cls.rocket}>
                <VStack gap={'14'} className={cls.textBlock}>
                    <Text
                        title={'STARSHIP CAPABILITIES'}
                        bold
                        size={'xxl'}
                    />
                    <Text text={'As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.'} uppercase={false}/>
                </VStack>
                <Image src={RocketImg} />
            </div>
        </section>
    )
    ;
});

export default HomePage;