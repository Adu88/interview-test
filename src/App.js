import React, { Component } from 'react';
import './App.css';
import connect from "react-redux/es/connect/connect";
import * as actions from './actions/sales';
import {cars, sellers} from "./helpers/jsonData";
import RecordASale from "./containers/RecordASale";
import AddMockupData from "./containers/AddMockupData";
import ShowTotalSales from "./containers/ShowTotalSales";
import ShowLeastProfitable from "./containers/ShowLeastProfitable";
import ShowMostProfitable from "./containers/ShowMostProfitable";

class App extends Component {

  componentDidMount() {
      this.props.setSellers(sellers);
      this.props.setCars(cars);
  }

  render() {
    const {cars, sellers} = this.props;
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

function mapStateToProps(state) {
    const {cars, sellers} = state.sales;
    return {cars, sellers}
}

export default connect(mapStateToProps, actions)(App);
