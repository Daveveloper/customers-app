import {createSelector} from 'reselect';


//Obtiene el array de customers del estado.
export const getCustomers = state => state.customers;


export const getCustomerByDni = createSelector(
    /* Esta funcion obtiene el customer basado el dni
    *  @state: obtener para recorrer customers
    *  @Props: obtiene el dni pasado como prop
    *  @return: un customer.
    */
    (state, props) => state.customers.find(c => c.dni === props.dni),
    /*
    * Esta funcion obtiene los resultados de las funciones anteriores.
    * En este caso solo una y devuelve el customer que es lo que necesitamos.
    * */
    customer => customer
);