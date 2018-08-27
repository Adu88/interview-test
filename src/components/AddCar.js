import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = () => ({
    input: {
        height: 26,
        padding: '0 10px',
        border: '1px solid #b3b3b3',
        outline: 'none',
        cursor: 'text',
        marginLeft: 30
    },
    inputWrapper: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    }
});

class AddCar extends Component {

    state = {
        name: '',
        color: '',
        purchaseValue: ''
    };

    handleNameChange(e) {
        this.setState({name: e.target.value});
    }

    handleColorChange(e) {
        this.setState({color: e.target.value})
    }

    handlePurchaseValueChange(e) {
        this.setState({purchaseValue: e.target.value})
    }

    handleOnButtonClick() {
        if (this.state.name !== '' && this.state.color !== '' && this.state.purchaseValue !== '') {
            const car = {
                name: this.state.name,
                color: this.state.color,
                purchaseValue: parseInt(this.state.purchaseValue),
                id: new Date().getTime()
            };
            this.props.addCar(car);
        }
    }

    render (){
        const {classes} = this.props;
        return (
            <div className={classes.inputWrapper}>
                <input placeholder="Enter Car Name"
                       value={this.state.name}
                       onChange={(e) => this.handleNameChange(e)}
                       className={classes.input}
                />
                <input placeholder="Enter Car Color"
                       value={this.state.color}
                       onChange={(e) => this.handleColorChange(e)}
                       className={classes.input}
                />
                <input placeholder="Enter Car Price"
                       value={this.state.purchaseValue}
                       onChange={(e) => this.handlePurchaseValueChange(e)}
                       className={classes.input}
                />
                <button className='record-car-sale-wrapper__submit-car-sale-button' onClick={() => this.handleOnButtonClick()}><div>Add Car</div></button>
            </div>
        )
    }
}

export default withStyles(styles)(AddCar);