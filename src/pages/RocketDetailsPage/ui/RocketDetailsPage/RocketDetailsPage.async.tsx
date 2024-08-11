import {lazy} from "react";

export const RocketDetailsPageAsync = lazy(
    async () => await import('./RocketDetailsPage')
)