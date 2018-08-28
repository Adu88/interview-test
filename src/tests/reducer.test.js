import {SET_SELLERS} from "../constants";
import {sellers} from "../helpers/jsonData";
import {sales} from "../reducers/sales";

const initialState = {
    cars: [],
    sellers: [],
    salesRecords: [],
    totalSales: [],
    mostProfitableSeller: '',
    leastProfitableSeller: {
        id: '',
        name: '',
        profit: ''
    }
}

// TODO: test reducer against all action types


it('handles actions of type SET_SELLERS', () => {
    const action = {
        type: SET_SELLERS,
        sellers
    };

    const newState = sales(initialState, action);

    expect(newState).toEqual({...initialState,sellers});
});


it('handles action with unknown type', () => {
    const newState = sales(initialState, { type: 'LKAFDSJLKAFD' });

    expect(newState).toEqual(initialState);
});