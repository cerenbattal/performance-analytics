import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DatePicker from '../components/DatePicker';
import  { ChartBody, getAllMetrics } from '../components/ChartBody';
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
  

export default function Dashboard() {
    const classes = useStyles();
    const [data, setData] = useState([]);
    useEffect(() => {
      getAllMetrics()
      .then((res) => {
        console.log('RES: ', res)
        setData(res)
      });
    }, []);

    const handleDateData = (dateData) => {
      setData(dateData)
    }

    // const handleDate = React.useCallback(({from, to}) => {
    //   console.log('FROM: ', from)
    //   console.log('TO: ', to)
    //   to = to ? new Date(to).getTime() : ""
    //   from = from ? new Date(from).getTime() : ""
      
    //   setDate({ to: to, from: from })
    // }, [date, setDate]);

    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <DatePicker onSelectDate={handleDateData}/>
                </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <ChartBody data={data}/>
              </Paper>
            </Grid>
          </Grid>
        </div>
    )
}
