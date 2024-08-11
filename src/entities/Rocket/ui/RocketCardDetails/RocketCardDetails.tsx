import cls from './RocketCardDetails.module.scss';
import {memo} from "react";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Card} from "@/shared/ui/Card";
import {Image} from "@/shared/ui/Image/Image";
import RocketGif from '@/shared/assets/rocket.gif';
import {RocketCardInfo} from "../RocketCardInfo/RocketCardInfo";
import {Text} from "@/shared/ui/Text/Text";
import {findDataById} from "@/entities/Rocket/lib/findDataById";
import {useSelector} from "react-redux";
import {getRocketData} from "../../model/selectors/getRocketData";
import {CustomSwiper} from "@/shared/ui/Swiper";

interface RocketCardDetailsProps {
    id?: string
}

export const RocketCardDetails = memo((props: RocketCardDetailsProps) => {
    const {
        id,
    } = props;
    const rocket = useSelector(getRocketData);
    const rocketInfo = findDataById(rocket, id)

    const slidersArray = rocketInfo?.flickr_images?.map(img => [
        <Card
            padding={'24'}
            borderColor={'secondary'}
            className={cls.card}
        >
            <Image
                key={img}
                src={img}
                className={cls.slide}
            />
        </Card>
    ])

    return (
        <div className={cls.container}>
            <Text
                className={cls.title}
                title={rocketInfo?.name}
                size={'xxl'}
                bold
            />
            <Card padding={'24'} borderColor={'secondary'}>
                <HStack gap={'24'} justify={'between'} align={'start'}>
                    <Card className={cls.img} padding={'24'} borderColor={'secondary'} radius={'m'}>
                        <Image  src={RocketGif}/>
                    </Card>
                    <VStack max gap={'24'}>
                        <Text
                            title={rocketInfo?.name}
                            size={'l'}
                            bold
                        />
                        <RocketCardInfo
                            rocket={rocketInfo}
                        />
                    </VStack>
                </HStack>
            </Card>
            <Text 
                title={'More photos:'} 
                bold 
                size={'xl'}
                className={cls.sliderTitle}
            />
            <CustomSwiper
                sliders={slidersArray ?? []}
                slidesPerView={2}
            />
        </div>
    );
});
