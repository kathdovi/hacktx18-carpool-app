import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { states } from './States.js';
import Radio from './Radio.js';


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
        this._onChange = this._onChange.bind(this)
        this._validate = this._validate.bind(this);
        this._back = this._back.bind(this);
        

    }

    _onChange(e, { value }) {
        this.setState({
            value: value,
            errors: []
        });
    }

    _validate(e) {
        e.preventDefault();
        let value = this.state.value;
        if (value === 'driver') {
            this.props.next(states.CAR_INFO);
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
                <Grid>
                <Radio />
                </Grid>
                <Grid>

                    <Button secondary onClick={this._back}>Back</Button>

                    <Button primary onClick={this._validate}>Next</Button>

                </Grid>
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
                    <Grid.Column floated='left' width={5}>
                        <Button secondary onClick={this._back}>Back</Button>
                    </Grid.Column>
                    <Grid.Column floated='right' width={5}>
                        <Button primary onClick={this._validate}>Next</Button>
                    </Grid.Column>
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
        let options = [
            {
                text: 'Yes',
                value: 'Yes'
            },
            {
                text: 'No',
                value: 'No'
            },
            {
                text: "Don't Know",
                value: "Don't Know"
            }
        ];

        return (
            <FormControl>
                {/* Things */}
            </FormControl>
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