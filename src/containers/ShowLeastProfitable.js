import React, { Component } from 'react';
import '.././App.css';
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions/sales";
import "react-table/react-table.css";

class ShowLeastProfitable extends Component {
    state = {
        showLeastProfitableSeller: false
    };


    handleOnButtonClick() {
        if (this.props.salesRecords.length > 0) {
            this.props.showLeastProfitableSeller();
            this.setState({showLeastProfitableSeller: true});
        }
    }

    handleDeleteSeller() {
        this.props.deleteLeastProfitableSeller();
        this.setState({showLeastProfitableSeller: false});
    }

    render() {
        const {leastProfitableSeller, salesRecords} = this.props;
        return (
            <div className="show-least-profitable-seller-wrapper">
                <button className='record-car-sale-wrapper__submit-car-sale-button' onClick={() => this.handleOnButtonClick()}><div>Show Least Profitable Seller</div></button>
                {this.state.showLeastProfitableSeller && salesRecords.length > 1 && <p style={{margin: '0 0 0 30px'}}>{leastProfitableSeller.name}</p>}
                {this.state.showLeastProfitableSeller && salesRecords.length > 1 && <button className='record-car-sale-wrapper__submit-car-sale-button' onClick={() => this.handleDeleteSeller()}><div>Delete Least Profitable Seller</div></button>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {leastProfitableSeller, salesRecords} = state.sales;
    return {leastProfitableSeller, salesRecords}
}

export default connect(mapStateToProps, actions)(ShowLeastProfitable);
