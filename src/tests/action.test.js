import {showTotalSales} from "../actions/sales";
import {SHOW_TOTAL_SALES} from "../constants";


const data = 1

const type= SHOW_TOTAL_SALES

describe('showTotalSales action creator', () => {

    it('has the correct type', () => {
        const action = showTotalSales(data);

        expect(action.type).toEqual(type);
    });

    it('has the correct payload', () => {

        const action = showTotalSales(data);

        expect(action.sellerId).toEqual(data);
    });
});