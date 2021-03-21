import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 476,
    borderRadius:0,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h6">
        Afganishtan Vs India
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Premier League 20/21
        </Typography>
        <Typography variant="body2" component="p">
          8 Hours 31 Minutes
        </Typography>
        <Typography variant="h6" component="h6">
        Your Ticket has been generated. you can customize your ticket below
        </Typography>
      </CardContent>
    </Card>
  );
}
