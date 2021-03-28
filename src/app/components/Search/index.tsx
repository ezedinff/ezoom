import {
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
} from '@material-ui/core';
import { Close, SearchOutlined } from '@material-ui/icons';
import React, { useRef } from 'react';
import PaymentCardIcon from '@material-ui/icons/PaymentOutlined';
import ExapandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import CompanyIcon from '@material-ui/icons/ApartmentOutlined';
import TrendingIcon from '@material-ui/icons/TrendingUpOutlined';
import useStyle from 'app/hooks/use-style';

const menus = [
  {
    name: 'Companies',
    icon: <CompanyIcon />,
  },
  {
    name: 'Stock Products',
    icon: <TrendingIcon />,
  },
  {
    name: 'Loan Products',
    icon: <PaymentCardIcon />,
  },
];
const styles = {
  inputField: {
    backgroundColor: '#fff',
    '& > div > input': {
      position: 'relative',
      left: '-16px',
    },
  },
  menuButton: {
    display: 'flex',
  },
};
const SearchCategory = ({ anchorEl, handleClose }) => {
  const { menuButton } = useStyle(styles);
  return (
    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {menus.map(menu => (
        <div style={{ minWidth: '20rem', padding: '0 16px' }} key={menu.name}>
          <MenuItem className={menuButton} onClick={() => handleClose(menu)}>
            <div style={{ marginRight: '16px' }}>{menu.icon}</div>
            <div>{menu.name}</div>
          </MenuItem>
          <Divider />
        </div>
      ))}
    </Menu>
  );
};

export default function ({ isMobile, onClose }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<{
    name: string;
    icon: React.ReactNode;
  }>(menus[0]);
  const classes = useStyle(styles);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = selected => {
    setAnchorEl(null);
    if (selected?.name) {
      setSelectedCategory(selected);
    }
  };

  return (
    <>
      <TextField
        variant="outlined"
        size="small"
        className={classes.inputField}
        onBlur={() => {
          onClose();
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment
              position="start"
              style={{ position: 'relative', left: '-15px' }}
            >
              <IconButton
                onClick={event => {
                  handleClick(event);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '0',
                  paddingRight: '0',
                }}
              >
                {selectedCategory?.icon}
                <ExapandMoreIcon />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                size="large"
                style={{
                  position: 'relative',
                  right: '-15px',
                  boxShadow: 'none',
                }}
                color="primary"
                variant="contained"
              >
                <SearchOutlined />
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <SearchCategory anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
}
