import {
    ADD_CAR,
    ADD_SELLER, DELETE_LEAST_PROFITABLE_SELLER,
    RECORD_THE_SALE_OF_A_CAR,
    SET_CARS,
    SET_SELLERS,
    SHOW_LEAST_PROFITABLE_SELLER, SHOW_MOST_PROFITABLE_SELLER,
    SHOW_TOTAL_SALES
} from "../constants";

export const setSellers = (sellers) => {
    return {
        type: SET_SELLERS,
        sellers
    }
};

export const setCars = (cars) => {
    return {
        type: SET_CARS,
        cars
    }
};

export const recordASale = (saleRecord) => {
    return {
        type: RECORD_THE_SALE_OF_A_CAR,
        saleRecord
    }
};

export const addSeller = (seller) => {
    return {
        type: ADD_SELLER,
        seller
    }
};

export const addCar = (car) => {
    return {
        type: ADD_CAR,
        car
    }
};

export const showTotalSales = (sellerId) => {
    return {
        type: SHOW_TOTAL_SALES,
        sellerId
    }
};

export const showLeastProfitableSeller = () =>{
    return {
        type: SHOW_LEAST_PROFITABLE_SELLER
    }
};

export const deleteLeastProfitableSeller = () => {
    return {
        type: DELETE_LEAST_PROFITABLE_SELLER
    }
};

export const showMostProfitableSeller = () => {
    return {
        type: SHOW_MOST_PROFITABLE_SELLER
    }
};