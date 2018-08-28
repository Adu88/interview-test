import React, { Component } from 'react';
import '.././App.css';
import AddSeller from "../components/AddSeller";
import AddCar from "../components/AddCar";
import {connect} from "react-redux";
import {addCar, addSeller} from "../actions/sales";

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

const mapDispatchToProps = (dispatch) => {
    return {
        addCar: (car) => dispatch(addCar(car)),
        addSeller: (seller) => dispatch(addSeller(seller))
    }
};

export default connect(null, mapDispatchToProps)(AddMockupData);
