import { $authHost, $host } from './index'
import jwt_decode from 'jwt-decode'

export const registration = async(email, password) => {
    const {data} = await $host.post('api/user/registration', {email,password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async(email, password) => {
    const {data} = await $host.post('api/user/login', {email,password})
    localStorage.setItem('token', data.token)  
    return jwt_decode(data.token)
}

export const check = async() => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)    
    return jwt_decode(data.token)
}

export const basket = async(userId) => {
    const {data} = await $authHost.get('api/user/basket', {userId})
    return data
}

export const addToBasket = async(deviceId) => {
    const {data} = await $authHost.post('api/user/basket', {deviceId})
    return data
}

export const rate = async(rate, deviceId) => {
    const {data} = await $authHost.post('api/user/rate', {rate, deviceId})
    return data
}
