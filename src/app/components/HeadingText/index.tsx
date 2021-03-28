import Typography from '@material-ui/core/Typography';
import React, { FC } from 'react';
import useStyle from '../../hooks/use-style';
const styles = {
  headingOne: {
    fontWeight: 'bolder',
  },
};
export const HeadingTextOne: FC = ({ children }) => {
  const classes = useStyle(styles);
  console.log(classes);
  return (
    <Typography
      color="textPrimary"
      variant={'h1'}
      className={classes['headingOne']}
    >
      {children}
    </Typography>
  );
};

export const HeadingTextTwo: FC<{
  color?: 'textSecondary' | 'textPrimary';
}> = ({ children, color }) => {
  return (
    <Typography
      style={{ fontWeight: 'bold' }}
      color={color || 'textSecondary'}
      variant="h5"
    >
      {children}
    </Typography>
  );
};
function useStyles() {
  throw new Error('Function not implemented.');
}
