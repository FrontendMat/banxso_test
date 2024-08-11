import cls from './HomePage.module.scss';
import {memo} from "react";
import {RocketBlock} from "../RocketBlock/RocketBlock";
import {FirstBlock} from "../FIrstBlock/FirstBlock";
import {AboutBlock} from "../AboutBlock/AboutBlock";
import {TeamBlock} from "../TeamBlock/TeamBlock";

const HomePage = memo(() => {
    return (
        <>
            <FirstBlock/>
            <RocketBlock className={cls.container}/>
            <AboutBlock className={cls.container}/>
            <TeamBlock className={cls.container}/>
        </>
    )
});

export default HomePage;