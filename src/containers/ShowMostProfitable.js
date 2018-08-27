import React, { Component } from 'react';
import '.././App.css';
import connect from "react-redux/es/connect/connect";
import {showMostProfitableSeller} from "../actions/sales";
import "react-table/react-table.css";

class ShowMostProfitable extends Component {
    state = {
        showMostProfitableSeller: false
    };


    handleOnButtonClick() {
        if (this.props.salesRecords.length > 0) {
            this.props.showMostProfitableSeller();
            this.setState({showMostProfitableSeller: true});
        }
    }

    render() {
        const {mostProfitableSeller, salesRecords} = this.props;
        return (
            <div className="show-least-profitable-seller-wrapper">
                <button className='record-car-sale-wrapper__submit-car-sale-button' onClick={() => this.handleOnButtonClick()}><div>Show Most Profitable Seller</div></button>
                {this.state.showMostProfitableSeller && salesRecords.length > 1 && <p style={{margin: '0 0 0 30px'}}>{mostProfitableSeller.name}</p>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {mostProfitableSeller, salesRecords} = state.sales;
    return {mostProfitableSeller, salesRecords}
};

const mapDispatchToProps = (dispatch) => {
    return {
        showMostProfitableSeller: () => dispatch(showMostProfitableSeller()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowMostProfitable);
