import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {fetchRocketData} from "./fetchRocketData";
import {mockRocketData} from "../consts/mockData";

const data = mockRocketData;

describe('fetchRocketData.test', () => {
    test('success fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchRocketData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetch data', async () => {
        const thunk = new TestAsyncThunk(fetchRocketData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
