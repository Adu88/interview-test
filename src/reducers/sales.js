import {
    ADD_CAR,
    ADD_SELLER, DELETE_LEAST_PROFITABLE_SELLER,
    RECORD_THE_SALE_OF_A_CAR,
    SET_CARS,
    SET_SELLERS,
    SHOW_LEAST_PROFITABLE_SELLER, SHOW_MOST_PROFITABLE_SELLER,
    SHOW_TOTAL_SALES
} from "../constants";

export function sales(
    state = {
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
        },
    action) {
    switch (action.type) {
        case SET_SELLERS: {
            return Object.assign({}, state, {sellers: action.sellers});
        }
        case SET_CARS: {
            return Object.assign({}, state, {cars: action.cars});
        }
        case RECORD_THE_SALE_OF_A_CAR: {
            const records = state.salesRecords.concat(action.saleRecord);
            return Object.assign({}, state, {salesRecords: records})
        }
        case ADD_SELLER: {
            const sellers = state.sellers.concat(action.seller);
            return Object.assign({}, state, {sellers})
        }
        case ADD_CAR: {
            const cars = state.cars.concat(action.car);
            return Object.assign({}, state, {cars})
        }
        case SHOW_TOTAL_SALES: {
            const totalSales = state.salesRecords.filter(sale => sale.sellerId === action.sellerId);
            return Object.assign({}, state, {totalSales: totalSales})
        }
        case SHOW_LEAST_PROFITABLE_SELLER: {
            let leastProfitable = {
                id: state.salesRecords[0].sellerId,
                name: state.salesRecords[0].sellerFirstName,
                profit: state.salesRecords[0].profit
            };
            for (let i = 0; i < state.salesRecords.length; i++) {
                if (state.salesRecords[i].profit < leastProfitable.profit) {
                    leastProfitable = {
                        id: state.salesRecords[i].sellerId,
                        name: state.salesRecords[i].sellerFirstName,
                        profit: state.salesRecords[i].profit
                    }
                }
            }
            return Object.assign({}, state, {leastProfitableSeller: leastProfitable} )
        }
        case DELETE_LEAST_PROFITABLE_SELLER: {
           const updatedSellers = state.sellers.filter(seller => seller.id !== state.leastProfitableSeller.id);
           return Object.assign({}, state, {sellers: updatedSellers, leastProfitableSeller: null} )
        }
        case SHOW_MOST_PROFITABLE_SELLER: {
            let mostProfitable = {
                id: null,
                name: null,
                profit: 0
            };
            for (let i = 0; i < state.salesRecords.length; i++) {
                if (state.salesRecords[i].profit > mostProfitable.profit) {
                    mostProfitable = {
                        id: state.salesRecords[i].sellerId,
                        name: state.salesRecords[i].sellerFirstName,
                        profit: state.salesRecords[i].profit
                    }
                }
            }
            return Object.assign({}, state, {mostProfitableSeller: mostProfitable} )
        }
        default:
            return state;
    }

}

