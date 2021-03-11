import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DatePicker from './components/DatePicker';
import ChartBody from './components/ChartBody';
import Button from '@material-ui/core/Button';

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

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="m">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <DatePicker />
                  <Button 
                    variant="contained" 
                    style={{backgroundColor: "#8884D8", color: '#FDFDFE'}}
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
    </Container>

  );
}

export default App;
