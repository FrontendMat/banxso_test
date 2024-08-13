import {RootState} from '@/app/providers/StoreProvider';
import {
    getRocketData,
} from './getRocketData';
import {mockRocketData} from "../consts/mockData";


describe('getRocketData.test', () => {
    test('should return value', () => {
        const data = mockRocketData;
        const state: DeepPartial<RootState> = {
            rocket: {
                data: data
            },
        };
        expect(getRocketData(state as RootState)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<RootState> = {};
        expect(getRocketData(state as RootState)).toEqual([]);
    });
});
