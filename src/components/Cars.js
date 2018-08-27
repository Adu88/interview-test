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

class Cars extends Component {

    state = {
        selectedCarId: ''
    };

    handleChange(e) {
        this.setState({selectedCarId: e.target.value});
        this.props.selectCar(e.target.value);
    }

    render (){
        const {classes, cars} = this.props;
        return cars ? (
            <form autoComplete="off" className={classes.formWrapper}>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="cars-helper">Cars</InputLabel>
                    <Select
                        value={this.state.selectedCarId}
                        onChange={(e) => this.handleChange(e)}
                        name="cars"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {cars.map((car, index) => {
                            return (
                                <MenuItem value={car.id} key={index}>{car.name}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </form>
        ) : null
    }
}

Cars.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cars);