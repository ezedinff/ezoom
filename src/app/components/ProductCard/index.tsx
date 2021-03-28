import { Button, Card, Typography } from '@material-ui/core';
import React from 'react';
import theme from 'theme';
import useStyle from '../../hooks/use-style';
import { HeadingTextTwo } from '../HeadingText';
const styles = {
  imageContainer: {
    height: '112px',
    flexGrow: '0',
    margin: '0 0 8px',
    marginBottom: '0',
    padding: '9.5px 32.5px 5px 28px',
    border: 'solid 0.5px',
    borderColor: theme.palette.grey[300],
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    backgroundColor: theme.palette.grey[300],
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  },
  contentBox: {
    margin: '8px 18.5px 17.5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
const ProductImage = ({ className }) => {
  return <div className={className}></div>;
};

const ProductContent = ({ classes }) => {
  return (
    <div className={classes.contentContainer}>
      <div className={classes.contentBox}>
        <div
          style={{
            paddingTop: '4px',
            paddingBottom: '4px',
            textAlign: 'center',
          }}
        >
          <HeadingTextTwo color="textPrimary">Name of Loaner</HeadingTextTwo>
        </div>
        <div
          style={{
            paddingTop: '4px',
            paddingBottom: '4px',
            textAlign: 'center',
          }}
        >
          <Typography color="textSecondary" variant="subtitle2">
            Auto Loan
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            textAlign: 'center',
          }}
        >
          <Typography color="textSecondary" variant="subtitle1">
            1-10 years
          </Typography>
          <Typography color="textSecondary" variant="subtitle1">
            10-20% interest
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            textAlign: 'center',
            paddingTop: '32px',
          }}
        >
          <Button>Details</Button>
          <Button variant="contained" color="primary">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};
export default function ProductCard() {
  const classes = useStyle(styles);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ProductImage className={classes.imageContainer} />
      <ProductContent classes={classes} />
    </div>
  );
}
