import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../auth/operations";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await goitApi.get('/contacts');
        return response.data;
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const response = await goitApi.delete(`/contacts/${id}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const response = await goitApi.post('/contacts/', body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

