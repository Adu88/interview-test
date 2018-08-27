import React, {Component} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";

const styles = () => ({
    input: {
        height: 26,
        padding: '0 10px',
        alignSelf: 'flex-end',
        border: '1px solid #b3b3b3',
        outline: 'none',
        cursor: 'text',
    },
    inputWrapper: {
        height: '100%',
        display: 'flex',
        marginLeft: 30
    }
});

class SalePrice extends Component {

    state = {
        price: ''
    };

    handleChange(e) {
        this.setState({price: e.target.value});
        this.props.inputPrice(e.target.value);
    }

    render (){
        const {classes} = this.props;
        return (
            <div className={classes.inputWrapper}>
                <input placeholder="Enter Car Price"
                       value={this.state.price}
                       onChange={(e) => this.handleChange(e)}
                       className={classes.input}
                />
            </div>
        )
    }
}

export default withStyles(styles)(SalePrice);