import {Rocket} from "@/entities/Rocket";

export function findLikedRockets (arrayId: string[] = [], rockets: Rocket[] = []) {
    return rockets.filter(rocket => arrayId.includes(rocket.id || ''));
}