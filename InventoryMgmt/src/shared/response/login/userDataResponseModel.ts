export interface UserDataResponseModel {
    id?: number;
    fullName?: string;
    email?: string;
    password?: string;
    createdBy?: string;
    createdDate?: Date;
    isAuthenticated?: boolean;
    token?: string;
}

export interface loginResponse{
    data: UserDataResponseModel
}
