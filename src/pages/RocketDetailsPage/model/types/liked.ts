export interface Liked {
    _id?: string;
    user?: string;
    dataId?: string;
}

export interface LikedSchema {
   isLoading?: boolean;
   error?: string;
   data?: Liked[];
}