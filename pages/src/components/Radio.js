import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class RadioButtonsGroup extends React.Component {
    state = {
        value: '',
    };

    _onChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center">
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Are you a...</FormLabel>
                    <RadioGroup
                        aria-label="persontype"
                        name="persontype"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this._onChange}
                    >
                        <FormControlLabel value="driver" control={<Radio />} label="Driver" />
                        <FormControlLabel value="rider" control={<Radio />} label="Rider" />
                    </RadioGroup>
                </FormControl>
                </Grid>
            </div>
        );
    }
}

RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);