import React from 'react'
import Chart from './Chart';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

export default function ChartBody() {
    const classes = useStyles();
    return (
        <Container maxWidth="m">
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Chart />
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Chart />
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Chart />
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <Chart />
                    </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container>

    )
}
