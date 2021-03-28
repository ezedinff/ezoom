import React from 'react';
import { Button, Container, Grid, Link } from '@material-ui/core';
import { HeadingTextOne, HeadingTextTwo } from '../HeadingText';
import {
  ApartmentOutlined,
  ArrowForwardOutlined,
  PaymentOutlined,
  TrendingUpOutlined,
} from '@material-ui/icons';
import theme from 'theme';
import useStyle from '../../hooks/use-style';
const styles = {
  heroContainer: {
    display: 'flex',
    padding: '64px',
    flexDirection: 'column',
    '@media (max-width: 900px)': {
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '16px',
    },
  },
  actionButton: {
    padding: '0 20px',
    paddingRight: '0',
    fontFamily: "'Open Sans', sans-serif",
    borderRadius: '5px',
    display: 'flex',
    cursor: 'pointer',
    color: '#fff',
    alignItems: 'Center',
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    '& > div': {
      padding: '10px 8px',
      marginLeft: '8px',
      backgroundColor: theme.palette.primary.dark,
      borderTopRightRadius: '5px',
      borderBottomRightRadius: '5px',
    },
  },
};
const ActionButton: React.FC<{
  actionButton: string;
  actionButtonContent: string;
}> = ({ children, actionButton, actionButtonContent }) => {
  return (
    <Link
      {...{
        style: { textDecoration: 'none' },
      }}
    >
      <div className={actionButton}>
        {children}
        <div className={actionButtonContent}>
          <ArrowForwardOutlined />
        </div>
      </div>
    </Link>
  );
};

const Stat = ({ icon, number, name }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex' }}>
        <div
          style={{ marginRight: '8px', color: theme.palette.text.secondary }}
        >
          {icon}
        </div>
        <HeadingTextTwo>{number}</HeadingTextTwo>
      </div>
      <div
        style={{
          marginLeft: '32px',
          marginBottom: '16px',
          fontWeight: 700,
          color: theme.palette.text.secondary,
        }}
      >
        {name}
      </div>
    </div>
  );
};
const StatBoard = () => {
  return (
    <Grid container style={{ marginTop: '32px' }}>
      <Grid item xs={12} md={8}>
        <Stat icon={<ApartmentOutlined />} number={125} name={'Companies'} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stat
            icon={<TrendingUpOutlined />}
            number={125}
            name={'Stock Products'}
          />
          <Stat
            icon={<PaymentOutlined />}
            number={125}
            name={'Loan Products'}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default function Hero() {
  const classes = useStyle(styles);
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Container className={classes.heroContainer}>
          <HeadingTextOne>Get or Lorem ipsum dolor sit amet</HeadingTextOne>
          <HeadingTextTwo>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            suscipit accusantium sint voluptas
          </HeadingTextTwo>
          <div
            style={{
              alignSelf: 'flex-end',
              marginTop: '16px',
              paddingRight: '32px',
            }}
          >
            <ActionButton
              actionButtonContent={classes.actionButtonContent}
              actionButton={classes.actionButton}
            >
              Take a look
            </ActionButton>
          </div>
          <StatBoard />
        </Container>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage:
              "url('https://res.cloudinary.com/dtz77duv8/image/upload/v1615728571/andrew-neel-cckf4TsHAuw-unsplash-min_dmohai.jpg')",
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: theme.palette.grey[300],
              opacity: '0.5',
            }}
          ></div>
        </div>
      </Grid>
    </Grid>
  );
}
