import {RocketSchema} from "../types/rocketSchema";
import {rocketActions, rocketReducer} from "../slice/rocketSlice";
import {mockRocketData} from "../consts/mockData";
import {fetchRocketData} from "../services/fetchRocketData";
import {AnyAction, Reducer} from "@reduxjs/toolkit";

describe('rocketSlice.test', () => {
    const customRocketReducer: Reducer<RocketSchema, AnyAction> = (state, action) => {
        return rocketReducer(state, action);
    };

    test('test set data', () => {
        const state: DeepPartial<RocketSchema> = {data: undefined};
        expect(rocketReducer(
            state as RocketSchema,
            rocketActions.setCachedData(mockRocketData),
        )).toEqual({data: mockRocketData});
    });

    test('test fetchRocketData pending', () => {
        const state: DeepPartial<RocketSchema> = {
            isLoading: false,
        };

        expect(
            customRocketReducer(state as RocketSchema, fetchRocketData.pending),
        ).toEqual({
            isLoading: true,
        });
    });
});