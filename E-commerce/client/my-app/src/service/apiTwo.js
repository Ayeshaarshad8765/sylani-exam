import axios from 'axios';
import { API_NOTIFICATION_MESSAGES,SERVICE_URLS } from '../constant/config';
const API_URL = 'http://localhost:8000';

const axiosInstance =axios.create({
baseURL: API_URL,
timeout:10000,
headers:{
    "Content-Type":"application/json"
}
})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        //stop global loader use

        return processResponse(response)
    },
    function(error){
        //Stop globa; loader here
        return Promise.reject(processError(error))
    }
)

///////////////////////////
//if success => return [isSucess : true, data:object]
//if fail =. return  [isstate  : true , status: string , msg : string , code int]
const processResponse = (response)=>{
    if(response?.status === 200){
        return {isSuccess: true, data: response.data}
    }else{
        return {
            IsFailure : true,
            status:response?.status,
            msg:response?.msg,
            code: response?.code
        }
    }
}

const processError = (error)=>{
    if(error.response){
        // Request made and server response with a status other
        //that falls out of the range 
        console.log('ERROR IN RESPONSE',error.toJSON())
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.responseFailure,
            code:error.response.status
        }
    }else if (error.request){
        //request made  but no request was received
        console.log('ERROR IN RESPONSE',error.toJSON())
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.requestFailure,
            code:""
        }
    }else{
        //smeting happened is setting up report that triggery an errror
        console.log('Error in network',error.toJSON())
        return{
            isError:true,
            msg: API_NOTIFICATION_MESSAGES.networkError,
            code:""
        }
    }
}

const API = {};

for(const [key, value] of Object.entries(SERVICE_URLS)){
    API[key] = (body, showUploadProgress,showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url:value.url,
            data:body,
            responseType:value.responseType,
            onUploadProgress:function (ProgressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function(ProgressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
                    showDownloadProgress(percentageCompleted)
                }
            }
        })
    
}

export {API}