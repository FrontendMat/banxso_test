import { AuthSchema } from '../types/authSchema';
import { authActions, authReducer } from './authSlice';

describe('authSlice.test', () => {
    test('test set email', () => {
        const state: DeepPartial<AuthSchema> = { email: '' };
        expect(authReducer(
            state as AuthSchema,
            authActions.setEmail('test@gmail.com'),
        )).toEqual({ email: 'test@gmail.com' });
    });

    test('test set password', () => {
        const state: DeepPartial<AuthSchema> = { password: '' };
        expect(authReducer(
            state as AuthSchema,
            authActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});