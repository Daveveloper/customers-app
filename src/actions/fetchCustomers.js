import { FETCH_CUSTOMERS } from "../constants";
import {createAction } from 'redux-actions';

const customers = [
    {
        "name":"Deivid Araya C.",
        "dni":"114410391",
        "age": 28
    },
    {
        "name":"Manuel Medrano",
        "dni":"514410391",
        "age": 26
    }
];

export const fetchCustomers = createAction (FETCH_CUSTOMERS, () => customers);