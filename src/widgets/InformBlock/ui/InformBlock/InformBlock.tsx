import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './InformBlock.module.scss';
import {memo, useMemo} from "react";
import {CustomSwiper} from "@/shared/ui/Swiper";
import {InformCard} from "../InformCard/InformCard";
import {useLocation} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig";
import RocketBig from "@/shared/assets/rocket_ph_big.jpeg";
import RocketImg from "@/shared/assets/rocket_ph.jpeg";

interface InformBlockProps {
    className?: string
}

const title = 'STARSHIP CAPABILITIES';
const description = 'As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.'

export const InformBlock = memo((props: InformBlockProps) => {
    const {
        className,
    } = props;
    const location = useLocation();
    const isMainPage = location.pathname === RoutePath.home;

    const arr = useMemo(() => [
        <InformCard
            image={RocketImg}
            title={title}
            description={description}
        />,
        <InformCard
            image={RocketImg}
            title={title}
            description={description}
        />,
        <InformCard
            image={RocketImg}
            title={title}
            description={description}
        />,
        <InformCard
            image={RocketImg}
            title={title}
            description={description}
        />,
    ], [])

    return (
        <div className={classNames(cls.InformBlock, {}, [className])}>
            <CustomSwiper
                slidesPerView={1}
                sliders={arr}
                buttonsAbsolute
            />
            {!isMainPage &&
                <InformCard
                    isBlock
                    image={RocketBig}
                    title={'STARBASE'}
                    description={'Development and manufacturing of Starship takes place at Starbase, one of the world’s first commercial spaceports designed for orbital missions.'}
                />
            }
        </div>
    );
});
