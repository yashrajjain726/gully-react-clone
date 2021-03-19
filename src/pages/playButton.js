import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function DisableElevation() {
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <Button size="large">Live</Button>
      <Button size="large"  >Replay</Button>
    </ButtonGroup>
  );
}