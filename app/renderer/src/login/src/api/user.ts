import { AxiosPromise } from 'axios'
import request from '../utils/request'

 export interface LoginData{
    username:string
    password:string
}

export function login(data:LoginData):AxiosPromise<{name:string}>{
    return request({
        url:'/user/login',
        method:'POST',
        data
    })
}