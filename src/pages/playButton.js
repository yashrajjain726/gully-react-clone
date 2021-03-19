import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function DisableElevation() {
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <Button>Live</Button>
      <Button>Replay</Button>
    </ButtonGroup>
  );
}