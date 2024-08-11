import {Rocket} from "./rocket";

export interface RocketSchema {
    isLoading?: boolean;
    inited?: boolean;
    error?: string;
    data?: Rocket[]
}