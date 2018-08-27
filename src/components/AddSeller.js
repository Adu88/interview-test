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

class AddSeller extends Component {

    state = {
        firstName: '',
        lastName: ''
    };

    handleFirstNameChange(e) {
        this.setState({firstName: e.target.value});
    }

    handleLastNameChange(e) {
        this.setState({lastName: e.target.value})
    }

    handleOnButtonClick() {
        if (this.state.firstName !== '' && this.state.lastName !== '') {
            const seller = {
                name: this.state.firstName,
                lastName: this.state.lastName,
                id: new Date().getTime()
            };
            this.props.addSeller(seller);
            this.setState({firstName: '', lastName: ''});
        }
    }

    render (){
        const {classes} = this.props;
        return (
            <div className={classes.inputWrapper}>
                <input placeholder="Enter Seller First Name"
                       value={this.state.firstName}
                       onChange={(e) => this.handleFirstNameChange(e)}
                       className={classes.input}
                />
                <input placeholder="Enter Seller Last Name"
                       value={this.state.lastName}
                       onChange={(e) => this.handleLastNameChange(e)}
                       className={classes.input}
                />
                <button className='record-car-sale-wrapper__submit-car-sale-button' onClick={() => this.handleOnButtonClick()}><div>Add Seller</div></button>
            </div>
        )
    }
}

export default withStyles(styles)(AddSeller);