import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyle from '../../hooks/use-style';
import { Box, BaseTextFieldProps } from '@material-ui/core';
import TextInput from './TextInput';
const styles = {
  label: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
};

export interface FormElementProps extends BaseTextFieldProps {
  type?: string;
  style?: any;
  label: string;
  name: string;
  options?: { label: string; value: string }[];
}
const getFormElement = (element: FormElementProps) => {
  switch (element.type) {
    case 'text':
    case 'password':
    case 'number':
      return <TextInput {...element} />;
  }
};
const FormElement: React.FC<FormElementProps> = (props: FormElementProps) => {
  const classes = useStyle(styles);
  return (
    <Box style={props.style}>
      <Typography
        className={classes.label}
        variant="subtitle1"
        component={'label'}
      >
        {props.label}
      </Typography>
      {getFormElement(props)}
    </Box>
  );
};

export default FormElement;
