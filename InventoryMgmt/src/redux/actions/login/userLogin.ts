import { LOGIN } from '../../types/index'
import { Dispatch } from 'redux'
import BaseApiService from '../../types/BaseApiService';
import { UserDataReuestModel } from '../../../shared/request/login';
import baseApiService from '../../types/BaseApiService';
import { toast } from 'react-toastify';;

export class UserLoginDispatcher {
    private readonly dispatch: Dispatch
    constructor(dispatch: Dispatch) {
        this.dispatch = dispatch
    }


    userLoginRequest = async (model: UserDataReuestModel): Promise<void> => {
        try {
            // this.dispatch({ type: LOGIN.USER_LOGIN });
            const formData = new FormData();
            formData.append('_method', 'post');
            formData.append('Email', model?.Email ?? '');
            formData.append('Password', model?.Password ?? '');
            const result= await baseApiService.post("api/UserAuth/token", formData,{
                headers: {'Content-Type': 'multipart/form-data'}
              }
            );

            sessionStorage.setItem("isAuthenticated",JSON.parse(result.data.isAuthenticated));
            sessionStorage.setItem("token",result.data.token);
            
            if(result.data.isAuthenticated){
                toast.success("Authentication successful");
                
            }else{
                toast.error("Autentication failed, please enter valid credentials");
            }
            this.dispatch({type: LOGIN.LOGIN_SUCCESS, payload: result});

        } catch (error: any) {
            toast.error("Something went wrong! please check with administrator"); 
            this.dispatch({
                payload: { data: {} },
                type: LOGIN.LOGIN_FAILURE,
            })
        }
    }
}

// export const UserLogin = (data: any) => async (dispatch: Dispatch<any>) => {
//     const response = await BaseApiService.post("/UserAuth/token", { data: data });
//     dispatch({ type: LOGIN.USER_LOGIN, data: response.data });
// };
