import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './HeaderNav.module.scss';
import {memo, useMemo} from "react";
import {HStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {AppLink} from "@/shared/ui/AppLink/AppLink";
import {getHeaderNavItems} from "../../model/selectors/getHeaderNavItems";
import {useSelector} from "react-redux";

interface HeaderNavProps {
    className?: string
}

export const HeaderNav = memo((props: HeaderNavProps) => {
    const {
        className,
    } = props;
    const navItems = useSelector(getHeaderNavItems);
    
    const routes = navItems.map( item => (
        <AppLink
            to={item.route}
            key={item.title}
        >
            <Text
                title={item.title}
                size={'m'}
            />
        </AppLink>
    )
    )

    return (
        <HStack
            align={'center'}
            gap={'40'}
            className={classNames(cls.HeaderNav, {}, [className])}
        >
            {routes}
        </HStack>
    );
});
