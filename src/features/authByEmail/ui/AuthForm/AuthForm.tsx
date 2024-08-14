import {classNames} from "@/shared/lib/classNames/classNames";
import cls from './AuthForm.module.scss';
import {memo, useCallback, useState} from "react";
import {Card} from "@/shared/ui/Card";
import {Input} from "@/shared/ui/Input/Input";
import {Button} from "@/shared/ui/Button/Button";
import {useSelector} from "react-redux";
import {getEmail, getError, getIsLoading, getPassword} from "../../model/selectors/getAuthData";
import {useAppDispatch} from "@/shared/lib/hooks/redux";
import {authActions} from "../../model/slice/authSlice";
import {Text} from "@/shared/ui/Text/Text";
import {HStack} from "@/shared/ui/Stack";
import {loginByEmail} from "../../model/services/loginByEmail/loginByEmail";
import {registrateByEmail} from "../../model/services/registrateByEmail";
import {getUserAuthData} from "@/entities/User";

export interface AuthFormProps {
    className?: string;
    onClose: () => void;
}

const AuthForm = memo((props: AuthFormProps) => {
    const {
        className,
        onClose
    } = props;
    const [isLogin, setIsLogin] = useState(true);

    const changeForm = useCallback(() => {
        setIsLogin(prev => !prev)
    }, [])

    const dispatch = useAppDispatch();
    const [isNew, setIsNew] = useState(false);
    const userData = useSelector(getUserAuthData);
    const email = useSelector(getEmail);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const setEmail = useCallback((value: string) => {
        dispatch(authActions.setEmail(value))
    }, [dispatch]);

    const setPassword = useCallback((value: string) => {
        dispatch(authActions.setPassword(value))
    }, [dispatch]);

    const onLogin = useCallback(async () => {
        const result = await dispatch(loginByEmail({email, password}));
        if (result.meta.requestStatus === 'fulfilled') {
            dispatch(authActions.setClear())
            onClose();
        }
    }, [email, password, onClose, dispatch])

    const onRegistration = useCallback(async() => {
        const result = await dispatch(registrateByEmail());
        if (result.meta.requestStatus === 'fulfilled') {
            setIsNew(true)
            dispatch(authActions.setClear())
        }
    }, [dispatch])

    if (userData && !userData?.isActivated || isNew) {
        return (
            <Card
                width={'max'}
                radius={'m'}
                borderColor={'primary'}
                padding={'24'}
                className={classNames(cls.AuthForm, {}, [className])}
            >
                <Text
                    align={'center'}
                    size={'l'}
                    bold
                    title={'The letter has been sent to your email. Please check and confirm the registration'}
                />
                <Button onClick={onClose}>Close</Button>
            </Card>
        )
    }

    return (
        <Card
            width={'max'}
            radius={'m'}
            borderColor={'primary'}
            padding={'24'}
            className={classNames(cls.AuthForm, {}, [className])}
        >
            <div className={cls.form}>
                {isLogin
                    ? <Text title={'Sign In'} size={'xl'} bold/>
                    : <Text title={'Sign Up'} size={'xl'} bold/>
                }
                {error && <Text text={error}/>}
                <HStack max justify={'between'}>
                    <Text text={'Email: test@gmail.com'}/>
                    <Text text={'Password: 123123'}/>
                </HStack>
                <Input
                    placeholder={'Email'}
                    type={'email'}
                    value={email}
                    onChange={setEmail}
                />
                <Input
                    type={'password'}
                    placeholder={'Password'}
                    value={password}
                    onChange={setPassword}
                />
                <HStack max justify={'between'} className={cls.btnWrapper}>
                    <Button
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        Close
                    </Button>
                    {isLogin
                        ?  <Button
                            onClick={onLogin}
                            type={'submit'}
                            disabled={isLoading}
                        >
                            Sign In
                        </Button>
                        : <Button
                            onClick={onRegistration}
                            type={'submit'}
                            disabled={isLoading}
                        >
                            Sing Up
                        </Button>
                    }
                </HStack>
                <Button
                    clear
                    square
                    onClick={changeForm}
                >
                    {isLogin
                        ? 'Create Account'
                        : 'Sign In'
                    }
                </Button>
            </div>
        </Card>
    );
});

export default AuthForm;