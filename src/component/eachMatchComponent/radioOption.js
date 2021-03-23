
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  button: {
    display: 'block',
  },
  formControl: {
    minWidth: 430,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl component="fieldset" className="radioOption">
      <FormLabel component="legend" className="radioOption">In which over Virat will open ? </FormLabel>
      <RadioGroup row aria-label="position" name="position" >
        <FormControlLabel
          value="3"
          control={<Radio color="primary" />}
          label="3"
         
        />
        <FormControlLabel
          value="1"
          control={<Radio color="primary" />}
          label="1"
        
        />
        <FormControlLabel
          value="0"
          control={<Radio color="primary" />}
          label="0"
         
        />
        <FormControlLabel value="end" control={<Radio color="primary" />} label="7" />
      </RadioGroup>
    </FormControl>

      </CardContent>
    </Card>
  );
}

