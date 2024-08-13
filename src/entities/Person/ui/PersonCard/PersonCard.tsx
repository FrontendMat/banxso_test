import {classNames} from "@/shared/lib/classNames/classNames";
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
            <VStack align={'center'} justify={'center'} gap={'10'}>
                <Text text={'St. Mechanic'} variant={'secondary'}/>
                <Text text={'Dave Johnson'}/>
            </VStack>
        </Card>
    );
});
