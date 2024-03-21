// Reducer => a function that takkes in the old state and an action and returns a new state
// action specifies how we are going to change the state

const transactions = [
    {id:1,
    id:2
    }
];
const contextReducer = (state,action) =>{

    let transactions;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            // jis bhi transaction ki id action.payload k barabar hogi, wo delete ho jaayega
             transactions = state.filter((t) => t.id !== action.payload);

            // implementing local storage
            localStorage.setItem('transactions',JSON.stringify(transactions));
            
            return transactions;
            
            
            
            case 'ADD_TRANSACTION':
                
                // naya transaction array banaya jisme add kar diye naya transaction aur baaki ka state as it is rahega
                transactions = [action.payload, ... state];

                // implementing local storage
                localStorage.setItem('transactions',JSON.stringify(transactions));

                return transactions;
        
    
        default:
           return state;
    }
}
export default contextReducer