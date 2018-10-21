import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


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
    
};

function Question(props) {
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Are you a...
                </Typography>

            </CardContent>
            <Grid container justify="center">
            <CardActions>
                <Button justify="center" style={styles.button} size="large">Driver</Button>
                <Button style={styles.button} size="large">Rider</Button>
            </CardActions>
            </Grid>
        </Card>
    );
}

Question.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Question);
