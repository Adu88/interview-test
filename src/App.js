import React, { Component } from 'react';
import './App.css';
import {connect} from "react-redux";
import {setCars, setSellers} from './actions/sales';
import {cars, sellers} from "./helpers/jsonData";
import RecordASale from "./containers/RecordASale";
import AddMockupData from "./containers/AddMockupData";
import ShowTotalSales from "./containers/ShowTotalSales";
import ShowLeastProfitable from "./containers/ShowLeastProfitable";
import ShowMostProfitable from "./containers/ShowMostProfitable";

export class App extends Component {

  componentDidMount() {
      this.props.setSellers(sellers);
      this.props.setCars(cars);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Cars 'R' Us</h1>
        </header>
        <AddMockupData/>
        <RecordASale/>
        <ShowTotalSales/>
        <ShowLeastProfitable/>
        <ShowMostProfitable/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCars: (cars) => dispatch(setCars(cars)),
        setSellers: (sellers) => dispatch(setSellers(sellers)),
    }
};

export default connect(null, mapDispatchToProps)(App);
