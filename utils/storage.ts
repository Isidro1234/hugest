import * as Securestore from "expo-secure-store"



const REFRESH_TOKEN_KEY = "user_refresh_token"


export const saveRefreshtoken = async(token:string)=>{
    await Securestore.setItemAsync(REFRESH_TOKEN_KEY , token)
}


export const getRefreshToken = async ()=>{
    return await Securestore.getItemAsync(REFRESH_TOKEN_KEY)
}

export const deleteToken = async()=>{
    return await Securestore.deleteItemAsync(REFRESH_TOKEN_KEY)
}