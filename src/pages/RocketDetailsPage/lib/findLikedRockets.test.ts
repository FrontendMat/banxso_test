import { Rocket } from '@/entities/Rocket';
import {findLikedRockets} from "@/pages/RocketDetailsPage/lib/findLikedRockets";

describe('findLikedRockets', () => {
    test('should return rockets that match any arrayId', () => {
        const rockets: Rocket[] = [
            { id: '1', name: 'Rocket 1' },
            { id: '2', name: 'Rocket 2' },
            { id: '3', name: 'Rocket 3' }
        ];
        const arrayId = ['1', '3'];
        const result = findLikedRockets(arrayId, rockets);
        expect(result).toEqual([
            { id: '1', name: 'Rocket 1' },
            { id: '3', name: 'Rocket 3' }
        ]);
    });

    test('should return an empty array if rockets dont match any arrayId', () => {
        const rockets: Rocket[] = [
            { id: '1', name: 'Rocket 1' },
            { id: '2', name: 'Rocket 2' },
            { id: '3', name: 'Rocket 3' }
        ];
        const arrayId = ['4', '5'];
        const result = findLikedRockets(arrayId, rockets);
        expect(result).toEqual([]);
    });

    test('should return an empty array when arrayId is empty', () => {
        const rockets: Rocket[] = [
            { id: '1', name: 'Rocket 1' },
            { id: '2', name: 'Rocket 2' },
            { id: '3', name: 'Rocket 3' }
        ];
        const arrayId: string[] = [];
        const result = findLikedRockets(arrayId, rockets);
        expect(result).toEqual([]);
    });

    test('should return an empty array when rockets is empty', () => {
        const rockets: Rocket[] = [];
        const arrayId = ['1', '2'];
        const result = findLikedRockets(arrayId, rockets);
        expect(result).toEqual([]);
    });

    test('should return an empty array when arrayId is undefined', () => {
        const rockets: Rocket[] = [
            { id: '1', name: 'Rocket 1' },
            { id: '2', name: 'Rocket 2' },
            { id: '3', name: 'Rocket 3' }
        ];
        const result = findLikedRockets(undefined, rockets);
        expect(result).toEqual([]);
    });

    test('should return an empty array when rockets is undefined', () => {
        const arrayId = ['1', '2'];
        const result = findLikedRockets(arrayId, undefined);
        expect(result).toEqual([]);
    });

    test('should return an empty array when both arg are undefined', () => {
        const result = findLikedRockets(undefined, undefined);
        expect(result).toEqual([]);
    });
});