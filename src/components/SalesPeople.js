import React, {Component} from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import withStyles from "@material-ui/core/es/styles/withStyles";
import PropTypes from 'prop-types';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Input from "@material-ui/core/Input/Input";

const styles = () => ({
    formControl: {
        width: 120,
        height: 50
    },

    formWrapper: {
        marginLeft: 30
    }
});

class SalesPeople extends Component {

    state = {
        selectedSellerId: ''
    };

    handleChange(e) {
        this.setState({selectedSellerId: e.target.value});
        this.props.selectSeller(e.target.value);
    }

    render (){
        const {classes, sellers} = this.props;
        return sellers ? (
            <form autoComplete="off" className={classes.formWrapper}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="seller-helper">Seller</InputLabel>
                    <Select
                        value={this.state.selectedSellerId}
                        onChange={(e) => this.handleChange(e)}
                        name="seller"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {sellers.map((seller, index) => {
                            return (
                                <MenuItem value={seller.id} key={index}>{`${seller.name} ${seller.lastName}`}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </form>
        ) : null
    }
}

SalesPeople.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SalesPeople);