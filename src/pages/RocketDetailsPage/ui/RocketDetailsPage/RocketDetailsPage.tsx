import {memo} from "react";
import {RocketCardDetails} from "@/entities/Rocket";
import {useParams} from "react-router-dom";

const RocketDetailsPage = memo(() => {
    const {id} = useParams();

    return (
        <>
            <RocketCardDetails
                id={id}
            />
        </>
    );
});

export default RocketDetailsPage;