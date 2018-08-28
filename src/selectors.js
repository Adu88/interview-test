import { createSelector } from 'reselect'

export const getCars = createSelector(
    state => state.sales,
    salesState => salesState.cars
);

export const getSellers = createSelector(
    state => state.sales,
    salesState => salesState.sellers
);

export const getSalesRecords = createSelector (
    state => state.sales,
    salesState => salesState.salesRecords
);

export const getTotalSales = createSelector (
    state => state.sales,
    salesState => salesState.totalSales
);