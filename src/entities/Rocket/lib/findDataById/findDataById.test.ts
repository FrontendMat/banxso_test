import { Rocket } from '@/entities/Rocket';
import {findDataById} from "@/entities/Rocket/lib/findDataById/findDataById";

describe('findDataById', () => {
    const rockets: Rocket[] = [
        { id: '1', name: 'Rocket 1' },
        { id: '2', name: 'Rocket 2' },
    ];

    test('should return data that match id', () => {
        const result = findDataById(rockets, '1');
        expect(result).toEqual(rockets[0]);
    });

    test('should return undefined if not match id', () => {
        const result = findDataById(rockets, '5');
        expect(result).toEqual(undefined);
    });

    test('should return undefined if id undefined', () => {
        const result = findDataById(rockets, undefined);
        expect(result).toEqual(undefined);
    });

    test('should return undefined if rockets undefined', () => {
        const result = findDataById(undefined, '1');
        expect(result).toEqual(undefined);
    });

    test('should return undefined if rockets and id undefined', () => {
        const result = findDataById(undefined, undefined);
        expect(result).toEqual(undefined);
    });
});