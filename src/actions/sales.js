import {
    ADD_CAR,
    ADD_SELLER, DELETE_LEAST_PROFITABLE_SELLER,
    RECORD_THE_SALE_OF_A_CAR,
    SET_CARS,
    SET_SELLERS,
    SHOW_LEAST_PROFITABLE_SELLER, SHOW_MOST_PROFITABLE_SELLER,
    SHOW_TOTAL_SALES
} from "../constants";

export function setSellers(sellers){
    return {
        type: SET_SELLERS,
        sellers
    }
}

export function setCars(cars){
    return {
        type: SET_CARS,
        cars
    }
}

export function recordASale(saleRecord) {
    return {
        type: RECORD_THE_SALE_OF_A_CAR,
        saleRecord
    }
}

export function addSeller(seller) {
    return {
        type: ADD_SELLER,
        seller
    }
}

export function addCar (car) {
    return {
        type: ADD_CAR,
        car
    }
}

export function showTotalSales(sellerId) {
    return {
        type: SHOW_TOTAL_SALES,
        sellerId
    }
}

export function showLeastProfitableSeller() {
    return {
        type: SHOW_LEAST_PROFITABLE_SELLER
    }
}

export function deleteLeastProfitableSeller() {
    return {
        type: DELETE_LEAST_PROFITABLE_SELLER
    }
}

export function showMostProfitableSeller() {
    return {
        type: SHOW_MOST_PROFITABLE_SELLER
    }
}