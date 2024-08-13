import {Rocket} from "../../model/types/rocket";

export const findDataById = (array: Rocket[] = [], id: string = '') => {
    return array.find(item => item.id === id);
}