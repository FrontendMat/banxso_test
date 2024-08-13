export {type User, type AuthResponse} from './model/types/user';
export {userReducer} from './model/slice/user';
export {checkIsUserAuth} from './model/services/checkIsUserAuth/checkIsUserAuth';
export {getUserAuthData, getUserInited} from './model/selectors/getUserAuthData';
export {userActions} from './model/slice/user';
export {logoutAuth} from './model/services/logoutUser/logoutUser'
