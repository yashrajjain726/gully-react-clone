import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
      <BottomNavigationAction label="My Ticket" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Me" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="More" icon={<RestoreIcon />} />
    </BottomNavigation>
  );
}
