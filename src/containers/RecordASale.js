import React, { Component } from 'react';
import '.././App.css';
import connect from "react-redux/es/connect/connect";
import * as actions from '.././actions/sales';
import SalesPeople from ".././components/SalesPeople";
import Cars from ".././components/Cars";
import SalePrice from ".././components/SalePrice";

class RecordASale extends Component {

    state = {
        selectedSeller: {},
        selectedCar: {},
        inputPrice: null
    };

    handleSelectSeller(sellerId) {
        const {sellers} = this.props;
        const selectedSeller = sellers.find(seller => seller.id === sellerId);
        this.setState({selectedSeller})
    };

    handleSelectCar(carId) {
        const {cars} = this.props;
        const selectedCar = cars.find(car => car.id === carId);
        this.setState({selectedCar})
    }

    handleOnButtonClick() {
        if (this.state.inputPrice < this.state.selectedCar.purchaseValue) {
            alert(`Please enter a value greater than ${this.state.selectedCar.purchaseValue}`);
        } else {
            const dateObj = new Date();
            const day = dateObj.getDate();
            const month = dateObj.getMonth();
            const year = dateObj.getFullYear();
            const date = day + '/' + month + '/' + year;
            const saleRecord = {
                sellerId: this.state.selectedSeller.id,
                sellerFirstName: this.state.selectedSeller.name,
                carName: this.state.selectedCar.name,
                buyerFirstName: 'Alex',
                carId: this.state.selectedCar.id,
                date: date,
                price: this.state.inputPrice,
                profit: this.state.inputPrice - this.state.selectedCar.purchaseValue
            };
            this.props.recordASale(saleRecord);
        }
    }

    handleInputPrice (price) {

        this.setState({inputPrice: parseInt(price)});
    }

    render() {
        const {cars, sellers} = this.props;
        console.log(this.state);
        return (
                <div className='record-car-sale-wrapper'>
                    <h2 style={{alignSelf: 'flex-start'}}>Record a Car Sale</h2>
                    <SalesPeople sellers={sellers} selectSeller={(sellerId) => this.handleSelectSeller(sellerId)}/>
                    <Cars cars={cars} selectCar={(carId) => this.handleSelectCar(carId)}/>
                    <SalePrice selectedCar={this.state.selectedCar} inputPrice={(price) => this.handleInputPrice(price)}/>
                    <button className='record-car-sale-wrapper__submit-car-sale-button' onClick={() => this.handleOnButtonClick()}><div>Submit Sale</div></button>
                </div>
        );
    }
}

function mapStateToProps(state) {
    const {cars, sellers, salesRecords} = state.sales;
    return {cars, sellers, salesRecords}
}

export default connect(mapStateToProps, actions)(RecordASale);
