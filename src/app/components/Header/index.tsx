import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  Theme,
  colors,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import routes from 'app/routes';
import { Close, SearchOutlined } from '@material-ui/icons';
import Search from '../Search';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    backgroundColor: theme.palette.grey[200],
    '@media (max-width: 900px)': {
      paddingLeft: 0,
    },
  },
  logo: {
    fontWeight: 600,
    textAlign: 'left',
    color: '#000',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '38px',
    textTransform: 'capitalize',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    width: '15rem',
  },
  close: {
    position: 'absolute',
    right: '16px',
    top: '8px',
    zIndex: 9999,
    color: '#fff',
  },
}));

export default function Header() {
  const {
    header,
    logo,
    menuButton,
    toolbar,
    drawerContainer,
    close,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    expandSearch: false,
  });

  const { mobileView, drawerOpen, expandSearch } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <Search isMobile={false} onClose={toggleSearch} />
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState(prevState => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState(prevState => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        {drawerOpen ? (
          <IconButton
            className={close}
            onClick={() => setState({ ...state, drawerOpen: false })}
          >
            <Close />
          </IconButton>
        ) : null}
        <Drawer
          {...{
            anchor: 'left',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        {expandSearch ? (
          <Search isMobile={true} onClose={toggleSearch} />
        ) : (
          <div
            style={{
              display: 'flex',
              flexGrow: 1,
              alignItems: 'center',
              justifyItems: 'space-between',
              justifyContent: 'space-between',
            }}
          >
            <div>{femmecubatorLogo}</div>
            <IconButton onClick={toggleSearch}>
              <SearchOutlined />
            </IconButton>
          </div>
        )}
      </Toolbar>
    );
  };
  const toggleSearch = () => {
    setState({ ...state, expandSearch: !state.expandSearch });
  };

  const getDrawerChoices = () => {
    return routes.map(route => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: route.path,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: route.name,
          }}
        >
          <MenuItem>{route.name}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Habtix
    </Typography>
  );

  const getMenuButtons = () => {
    return routes.map(route => {
      return (
        <Button
          {...{
            key: route.name,
            variant: route.variant ? 'contained' : 'text',
            color: route.variant ? 'primary' : undefined,
            to: route.path,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {route.name}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar position="static" className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
