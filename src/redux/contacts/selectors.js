import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.loading;

//мемоізація селекторів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);