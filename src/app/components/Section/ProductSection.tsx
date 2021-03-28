import { Button, Grid } from '@material-ui/core';
import { ArrowForwardOutlined } from '@material-ui/icons';
import React from 'react';
import useStyle from '../../hooks/use-style';
import { HeadingTextTwo } from '../HeadingText/index';
import ProductCard from '../ProductCard';

const styles = (color: string) => {
  return {
    sectionContainer: {
      position: 'relative',
      top: '-4rem',
      padding: '18px',
      paddingTop: '0',
      margin: '0',
    },
    decorBorder: {
      width: '0.4rem',
      backgroundColor: color,
      height: '8rem',
      marginRight: '8px',
    },
    sectionHeader: {
      display: 'flex',
      flexGrow: 1,
      marginTop: '24px',
    },
  };
};

export default function ({ color, title }) {
  const classes = useStyle(styles(color));
  return (
    <>
      <div className={classes.sectionHeader}>
        <div className={classes.decorBorder}></div>
        <div style={{ flex: 1 }}>
          <HeadingTextTwo color="textPrimary">{title}</HeadingTextTwo>
        </div>
        <div style={{ justifySelf: 'flex-end', margin: '16.5px 24px' }}>
          <Button>
            More&nbsp;&nbsp;
            <ArrowForwardOutlined />
          </Button>
        </div>
      </div>
      <div className={classes.sectionContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ProductCard />
          </Grid>

          <Grid item xs={12} md={3}>
            <ProductCard />
          </Grid>

          <Grid item xs={12} md={3}>
            <ProductCard />
          </Grid>

          <Grid item xs={12} md={3}>
            <ProductCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
