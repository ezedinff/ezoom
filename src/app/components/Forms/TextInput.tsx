import React from 'react';
import {
  Box,
  Typography,
  OutlinedTextFieldProps,
  TextField,
  BaseTextFieldProps,
} from '@material-ui/core';
import theme from 'theme';
import useStyle from '../../hooks/use-style';
const styles = {
  root: {
    '&>*': {
      minWidth: '100%',
    },
  },
  label: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: theme.palette.grey[200],
    '&>div>input::placeholder': {
      color: theme.palette.grey[700],
      opacity: '1',
    },
    '&>.MuiFormHelperText-root': {
      backgroundColor: 'white',
      width: '100%',
      position: 'relative',
      left: '-14px',
      paddingLeft: '14px',
    },
  },
};
interface TextIputProps extends Partial<BaseTextFieldProps> {
  label: string;
  name: string;
  example?: string;
}
const TextInput: React.FC<TextIputProps> = ({ example, label, ...rest }) => {
  const classes = useStyle(styles);
  return (
    <Box className={classes.root}>
      <TextField
        className={classes.input}
        placeholder={example || label}
        variant="outlined"
        {...rest}
      />
    </Box>
  );
};

export default React.memo(TextInput);
