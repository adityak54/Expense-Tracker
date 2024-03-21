// kisi ek particular data ko har component me pass karna padega agar uske changes ko har stage pe track karna hai to
// ye avoid karne k piye context ka use kar rahe
// poore app ko isse wrap kar diye...ab bas ek hook k madad se hi changes kar paayenge


import React, {useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) =>{
    const [transactions,dispatch] = useReducer(contextReducer,initialState);

    // Action Creators
    // this will happen when we delete a transaction
    // once you delete a transaction,call this function having the given id and dispatch an action
    // yes,delete this,this is the id
    const deleteTransaction =(id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id});
    
    // payload - additional data we want to with our action

    const addTransaction = (transaction) => dispatch({type: 'ADD_TRANSACTION',payload: transaction});


    //updating the balance
    const balance = transactions.reduce((acc,currVal)=> (currVal.type==='Expense'? acc-currVal.amount: acc+currVal.amount)
    ,0);

    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
             }}> 
        {/* we are passing deleteTransaction and addTransaction to our whole state using this and we can control where to call this function throughout our app*/}
            {children}
        </ExpenseTrackerContext.Provider>
    );
}