import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import img1 from '../img/img1.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
      
    <div className={classes.root}>
         
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="img1" src={img1} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 [T20] Afganishtan vs Zimbawae in UAE, 2021
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Afganishtan vs Zimbawae
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  21 Hours 51 Minutes
                </Typography>
              </Grid>
              
            </Grid>
            <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="img1" src="./img/img1.png" />
            </ButtonBase>
          </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
