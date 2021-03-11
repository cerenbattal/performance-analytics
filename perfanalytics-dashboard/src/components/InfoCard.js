import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

export default function InfoCard() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Client Info
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        url: <Typography variant="body1" style={{display: 'inline-block'}}>clienturl</Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        userAgent: <Typography variant="body1" style={{display: 'inline-block'}}>userAgent</Typography>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        resMetrics: <Typography variant="body1" style={{display: 'inline-block'}}>resMetrics</Typography>
      </Typography>
      
    </div>
  );
}
