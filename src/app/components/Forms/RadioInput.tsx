import { RadioGroupProps } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import Radio from '@material-ui/core/Radio/Radio';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import React from 'react';
interface Props extends RadioGroupProps {
  error?: boolean;
  helperText?: string | false;
  label?: string;
  order: 'row' | 'column';
  options: { label: string; value: string }[];
}
const RadioInput: React.FC<Props> = (props: Props) => {
  const [value, setValue] = React.useState(props.value);
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    if (props.onChange) {
      props.onChange(event, value);
    }
  };
  return (
    <FormControl component="fieldset" error={props.error}>
      <RadioGroup
        aria-label={props.label}
        name={props.name}
        style={{
          display: 'flex',
          flexDirection: props.order,
        }}
        value={value}
        onChange={handleRadioChange}
      >
        {props.options.map(option => {
          return (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio color="primary" />}
              label={option.label}
            />
          );
        })}
      </RadioGroup>
      <FormHelperText style={{ paddingLeft: '14px' }}>
        {props.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default RadioInput;
