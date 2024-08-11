import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './HeaderNav.module.scss';
import {memo, useMemo} from "react";
import {HStack} from "@/shared/ui/Stack";
import {Text} from "@/shared/ui/Text/Text";
import {AppLink} from "@/shared/ui/AppLink/AppLink";
import {RoutePath} from "@/shared/config/routeConfig";

interface HeaderNavProps {
    className?: string
}

interface NavItem  {
    title: string;
    route: string;
}

export const HeaderNav = memo((props: HeaderNavProps) => {
    const {
        className,
    } = props;
    
    const array: NavItem[] = useMemo(() => [
        {title: 'Home', route: RoutePath.home},
        {title: 'About', route: ''},
        {title: 'Qa', route: ''},
        {title: 'Contact form', route: ''},
    ], [])

    return (
        <HStack
            align={'center'}
            gap={'40'}
            className={classNames(cls.HeaderNav, {}, [className])}
        >
            {array.map(item => (
                <AppLink
                    to={item.route}
                >
                    <Text 
                        title={item.title}
                        size={'m'}
                    /> 
                </AppLink>
            ))}
        </HStack>
    );
});
