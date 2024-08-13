import {Rocket} from "./rocket";

export interface RocketSchema {
    isLoading?: boolean;
    error?: string;
    data?: Rocket[]
}