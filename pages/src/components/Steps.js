import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { states } from './States.js';
import Radio from '@material-ui/core/Radio';
import RadioButtonsGroup from './Radio.js';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const styles = {
    card: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    form: {
        marginRight: 30,
        marginLeft: 30,
    },
};

export const Welcome = (props) => {

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    What's your...
                </Typography>

            </CardContent>
            <Grid container spacing={24}>
                <Grid item style={styles.form} xs={12}>
                    <FormGroup>
                        <TextField
                            id="name"
                            label="Name"
                            placeholder="Name"
                            multiline
                            margin="normal"
                        />
                    </FormGroup>
                </Grid>
                <Grid item style={styles.form} xs={12}>
                    <FormGroup>
                        <TextField
                            id="address"
                            label="Address"
                            placeholder="Address"
                            multiline
                            margin="normal"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <CardActions>
                    <Button primary onClick={() => props.next(states.PERSON_CHOOSE)} style={styles.button} size="large">Next</Button>
                </CardActions>
            </Grid>
        </Card>
    );
}

export class PersonChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            errors: []
        };
        this._onChange = this._onChange.bind(this);
        this._validate = this._validate.bind(this);
        this._back = this._back.bind(this);


    }

    _onChange = event => {
        this.setState({ value: event.target.value });
    };


    _validate(e) {
        e.preventDefault();
        let value = this.state.value;
        console.log(value);
        if (value === 'driver') {
            this.props.next(states.CAR_DETAIL);
        } else if (value === 'rider') {
            this.props.next(states.RIDER_START);
        } else {
            this.setState({
                errors: ['Please choose driver or rider']
            });
        }
    }

    _back() {
        this.props.back(states.WELCOME);
    }

    render() {
        return (
            <div>
                <Card>

                    <Grid container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justify="center">
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">Are you a...</FormLabel>
                            <RadioGroup
                                aria-label="persontype"
                                name="persontype"
                                value={this.state.value}
                                onChange={this._onChange}
                            >
                                <FormControlLabel value="driver" control={<Radio />} label="Driver" />
                                <FormControlLabel value="rider" control={<Radio />} label="Rider" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid>

                        <Button secondary onClick={this._back}>Back</Button>

                        <Button primary onClick={this._validate}>Next</Button>

                    </Grid>
                </Card>
            </div>
        );
    }
}

class BaseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type,
            address: null,
            errors: []
        }
        this._onChange = this._onChange.bind(this);
        this._validate = this._validate.bind(this);
        this._back = this._back.bind(this);
    }

    _back(e) {
        e.preventDefault();
        this.props.back(states.VEHICLE_CHOOSE);
    }

    _onChange(e, { name, value }) {
        this.setState({
            [name]: value
        });
    }

    _validate(e) {
        e.preventDefault();
        // You can add your validation logic here

        this.props.saveForm({
            type: this.props.type,
            address: this.state.address,
        });

        this.props.next(this.props.nextState);
    }

    render() {
        return (
            <FormControl>
                {/* {this.state.errors.length > 0 &&
                    <Message negative>
                        <p>{this.state.errors.join('. ')}</p>
                    </Message>
                } */}
                <h2>{this.props.type} details:</h2>
                <FormGroup widths='equal'>
                    <TextField
                        id="standard-textarea"
                        label="With placeholder multiline"
                        placeholder="Placeholder"
                        multiline
                        margin="normal"
                    />
                </FormGroup>
                <Grid>

                    <Button secondary onClick={this._back}>Back</Button>


                    <Button primary onClick={this._validate}>Next</Button>

                </Grid>
            </FormControl>
        );
    }
}

export const DriverStart = (props) => {
    return (
        <BaseForm
            type='DriverStart'
            next={props.next}
            back={props.back}
            saveForm={props.saveForm}
            nextState={states.DRIVER_FINISH} />
    );
}

export const DriverFinish = (props) => {
    return (
        <BaseForm
            type='DriverFinish'
            next={props.next}
            back={props.back}
            saveForm={props.saveForm}
            nextState={states.CONFIRM} />
    );
}

export const RiderStart = (props) => {
    return (
        <BaseForm
            type='RiderStart'
            next={props.next}
            back={props.back}
            saveForm={props.saveForm}
            nextState={states.RIDER_FINISH} />
    );
}

export const RiderFinish = (props) => {
    return (
        <BaseForm
            type='RiderFinish'
            next={props.next}
            back={props.back}
            saveForm={props.saveForm}
            nextState={states.CONFIRM} />
    );
}

export class CarInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onChange = this._onChange.bind(this);
        this._validate = this._validate.bind(this);
    }
    _onChange(e) {

    }

    _validate(e) {
        // You can add validation logic here
        this.props.next(states.CONFIRM)
    }

    render() {
        return (
            < Grid container style={styles.form} xs={12}>
                <Grid item style={styles.form} xs={12}>
                    <Typography variant="h5" component="h2">
                        How many seats do you have available?
                </Typography>
                </Grid>
                <FormControl >
                    <Grid item style={styles.form} xs={12}>
                        <FormGroup>
                            <InputLabel htmlFor="demo-controlled-open-select">Available Seats</InputLabel>
                            <Select
                                open={this.state.open}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={this.state.age}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'available-seats',
                                    id: 'demo-controlled-open-select',
                                }}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                            </Select>
                        </FormGroup>
                    </Grid>
                </FormControl>
            </Grid>
        );
    }
}

export class Confirm extends React.Component {
    render() {
        /*
         * Here is our final step. In the real world, we would
         * obviously do something more complicated than a javascript
         * alert
         */
        return (
            <h1> Woohoo! </h1>
        );
    }
}