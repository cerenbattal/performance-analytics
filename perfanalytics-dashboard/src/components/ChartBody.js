import React, {useState, useEffect} from 'react';
import Chart from './Chart';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import InfoCard from './InfoCard'
import { makeStyles } from '@material-ui/core/styles';
import metricService from '../services/metricService';
import {metricTypes} from "../constants/constants";

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

const getAllMetrics = () => {
    return new Promise((resolve, reject) => {
        metricService.findAll().then(
            (response) => {
                resolve(response)
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                reject(resMessage)
            }
        );
    })
}


export default function ChartBody() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMetrics()
            .then((res) => {
              setData(res);
              console.log('RES: ', res)
            });
    }, []);

    
    const allCharts = metricTypes.map((header, index) => {
        let metricArray = []
        data.map((metric) => {
            // console.log('METRIC: ', metric)
            // console.log('HEADER: ', header)
            metricArray.push({value: metric[header], createdAt: metric.createdAt})
            // console.log('METRIC ARRAY: ', metricArray)
        })
        return (
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Chart
                    key={index}
                    header={header}
                    chartData={metricArray}
                />
                </Paper>
            </Grid>
        );
    });

    return (
        <div>
            {data[0] ? (
                <Container maxWidth="sm">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            <InfoCard url={data[0].url} userAgent={data[0].userAgent} resMetrics={data[0].resMetrics}/>
                        </Paper>
                        </Grid>
                        {allCharts}
                    </Grid>
                </div>
                </Container>
            ) : (
                <p>no data!</p>
            )
            }
        </div>
        

    )
}
