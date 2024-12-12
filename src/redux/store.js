import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contacts/slice";
import { filterContacts } from "./filters/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterContacts,
        auth: authReducer,
    },
})
