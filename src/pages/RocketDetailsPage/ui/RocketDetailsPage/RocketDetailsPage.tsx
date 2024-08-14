import {memo, useCallback, useEffect} from "react";
import {RocketCardDetails} from "@/entities/Rocket";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "@/shared/lib/hooks/redux";
import {fetchLikedData} from "../../model/services/fetchLikedData";
import {RocketLikedItems} from "../RocketLikedItems/RocketLikedItems";
import {toggleLike} from "../../model/services/toggleLike";
import {useSelector} from "react-redux";
import {getLikedData} from "../../model/selectors/getLikedData";
import {Page} from "@/shared/ui/Page/Page";
import {InformBlock} from "@/widgets/InformBlock";

const RocketDetailsPage = memo(() => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const likedData = useSelector(getLikedData);

    const isLiked = likedData?.some(item => item.dataId === id);

    useEffect(() => {
        dispatch(fetchLikedData());
    }, [dispatch])

    const onToggleLike = useCallback(async () => {
        const result = await dispatch(toggleLike(id));
        if (result.meta.requestStatus === 'fulfilled') {
            dispatch(fetchLikedData())
        }
    }, [dispatch, id])

    return (
        <Page>
            <RocketCardDetails
                onToggleLike={onToggleLike}
                isLiked={isLiked}
                id={id}
            />
            <RocketLikedItems
                data={likedData}
            />
        </Page>
    );
});

export default RocketDetailsPage;