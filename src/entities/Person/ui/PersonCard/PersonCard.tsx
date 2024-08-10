import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './PersonCard.module.scss';
import {memo} from "react";
import {Card} from "@/shared/ui/Card";
import {Image} from "@/shared/ui/Image/Image";
import PersonImg from "@/shared/assets/person_avatar.png"
import {VStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";

interface PersonCardProps {
    className?: string
}

export const PersonCard = memo((props: PersonCardProps) => {
    const {
        className,
    } = props;

    return (
        <Card
            padding={'24'}
            borderColor={'secondary'}
            className={classNames('', {}, [className])}
        >
            <Image
                src={PersonImg}
            />
            <VStack>
                <Text text={'St. Mechanic'} variant={'accent'}/>
                <Text text={'Dave Johnson'}/>
            </VStack>
        </Card>
    );
});
