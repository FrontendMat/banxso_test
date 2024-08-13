import {memo, useCallback, useEffect} from "react";
import {Text} from "@/shared/ui/Text/Text";
import {Page} from "@/shared/ui/Page/Page";

const UserPage = memo(() => {

    return (
        <Page>
            <Text title={'User Account Page'} align={'center'} bold/>
        </Page>
    );
});

export default UserPage;