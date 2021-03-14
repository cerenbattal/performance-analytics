import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DatePicker from '../components/DatePicker';
import ChartBody from '../components/ChartBody';
import Button from '@material-ui/core/Button';
import metricService from '../services/metricService';

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
  
const handleDate = (from, to) => {
    console.log('FROM: ', from)
    console.log('TO: ', to)
}

const handleClick = () => {
    
}

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <DatePicker onSelectDate={handleDate}/>
                  <Button 
                    variant="contained" 
                    style={{backgroundColor: "#8884D8", color: '#FDFDFE'}}
                    onClick={handleClick}
                  >
                    Show
                  </Button>
                </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ChartBody />
              </Paper>
            </Grid>
          </Grid>
        </div>
    )
}
