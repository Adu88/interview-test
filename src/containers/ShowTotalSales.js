import React, { Component } from 'react';
import '.././App.css';
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions/sales";
import SalesPeople from "../components/SalesPeople";
import ReactTable from "react-table";
import "react-table/react-table.css";

class ShowTotalSales extends Component {
    state = {
        showSales: false,
        selectedSeller: null
    };

    handleSelectSeller(sellerId) {
        const {sellers} = this.props;
        const selectedSeller = sellers.find(seller => seller.id === sellerId);
        this.setState({selectedSeller})
    };

    handleOnButtonClick() {
        if (this.state.selectedSeller) {
            this.props.showTotalSales(this.state.selectedSeller.id);
            this.setState({showSales: true})
        }
    }

    render() {
        const {sellers, totalSales} = this.props;
        return (
            <div className="show-total-sales-wrapper">
                <div className='show-total-sales-wrapper__header'>
                    <SalesPeople sellers={sellers} selectSeller={(sellerId) => this.handleSelectSeller(sellerId)}/>
                    <button className='record-car-sale-wrapper__submit-car-sale-button' onClick={() => this.handleOnButtonClick()}><div>Show Total Sales</div></button>
                    {this.state.showSales && totalSales.length === 0 && <p style={{margin: '0 0 0 30px'}}>This User hasn't made any sales yet!</p>}
                </div>
                {this.state.showSales && totalSales.length > 0 &&
                <ReactTable
                    data={totalSales}
                    columns={[
                        {
                            Header: "Seller",
                            accessor: 'sellerFirstName'
                        },
                        {
                            Header: "Buyer",
                            accessor: 'buyerFirstName'
                        },
                        {
                            Header: 'Car',
                            accessor: 'carName'
                        },
                        {
                            Header: 'Date',
                            accessor: 'date'
                        },
                        {
                            Header: 'Sold Price',
                            accessor: 'price'
                        },
                        {
                            Header: 'Profit',
                            accessor: 'profit'
                        }
                    ]}
                    defaultPageSize={10}
                    className="show-total-sales-wrapper__sales-list"
                />}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {sellers, salesRecords, totalSales} = state.sales;
    return {sellers, salesRecords, totalSales}
}

export default connect(mapStateToProps, actions)(ShowTotalSales);
