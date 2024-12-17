import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//щоб не було конфлікту, якщо використовуємо різні АРІ 
export const goitApi = axios.create({
    baseURL: 'https://connections-api.goit.global/',
})
//утіліта для логаут, щоб передати токен для виходу
//додати авториз, логин щоб одразу отримати токен
const setAuthHeader = (token) => {
    goitApi.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader = () => {
    goitApi.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const response = await goitApi.post('/users/signup', credentials);
        setAuthHeader(response.data.token)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await goitApi.post('/users/login', credentials);
        setAuthHeader(response.data.token)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await goitApi.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})