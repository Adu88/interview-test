import React, { Component } from 'react';
import '.././App.css';
import AddSeller from "../components/AddSeller";
import AddCar from "../components/AddCar";
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions/sales";

class AddMockupData extends Component {

    handleAddSeller(seller) {
        this.props.addSeller(seller);
        console.log(seller);
    }

    handleAddCar(car) {
        this.props.addCar(car);
        console.log(car);
    }

    render() {
        return (
            <div className="add-mockup-data">
                <AddSeller addSeller={(seller) => this.handleAddSeller(seller)}/>
                <AddCar addCar={(car) => this.handleAddCar(car)}/>
            </div>
        );
    }
}

export default connect(null, actions)(AddMockupData);
