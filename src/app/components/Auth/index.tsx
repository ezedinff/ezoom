import { Button, Grid, Hidden, Link, Typography } from '@material-ui/core';
import TextInput from 'app/components/Forms/TextInput';
import { HeadingTextOne, HeadingTextTwo } from 'app/components/HeadingText';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import theme from 'theme';
import useStyle from '../../hooks/use-style';
const styles = {
  hero: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    padding: '24px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage:
      "url('https://res.cloudinary.com/dtz77duv8/image/upload/v1615736216/Untitled_1_vkprmr.jpg')",
  },
  formContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '64px',
    '@media (max-width: 900px)': {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  recDecor: {
    width: '1.2rem',
    height: '18rem',
    marginRight: '8px',
    backgroundColor: theme.palette.primary.main,
  },
};
const AuthHero = ({ classes }) => {
  return (
    <div className={classes.hero}>
      <div className={classes.recDecor}></div>
      <div style={{ position: 'relative', top: '-1.5rem' }}>
        <HeadingTextOne>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </HeadingTextOne>
        <HeadingTextTwo>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          consequatur aut quisquam eius. Placeat sequi dolorem explicabo quod?
        </HeadingTextTwo>
      </div>
    </div>
  );
};

const Auth: React.FC = ({ children }) => {
  const classes = useStyle(styles);
  return (
    <Grid container>
      <Hidden mdDown>
        <Grid item md={6} style={{ overflow: 'hidden' }}>
          <AuthHero classes={classes} />
        </Grid>
      </Hidden>
      <Grid item xs={12} md={6}>
        <div className={classes.formContainer}>{children}</div>
      </Grid>
    </Grid>
  );
};

export default Auth;
