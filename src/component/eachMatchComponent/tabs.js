import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



export default function DisabledTabs() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}>
        <Tab label="Row 1" />
        <Tab label="Row 2" disabled />
        <Tab label="Row 3" disabled />
        <Tab label="Row 4" disabled />
        <Tab label="Row 5" disabled />
        <Tab label="Bails" disabled />
      </Tabs>
    </Paper>
  );
}
