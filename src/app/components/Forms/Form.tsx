import { BaseTextFieldProps, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import React from 'react';
import LoadableButton from '../buttons/LoadableButton';
import { HeadingTextTwo } from '../HeadingText';
import FormElement, { FormElementProps } from './FormElement';
import { useFormik } from 'formik';
export interface FormProps {
  title: string;
  rows: {
    elements: FormElementProps[];
  }[];
  actionButton: {
    children: string;
    loading: boolean;
    fullWidth?: boolean;
    color: 'primary';
    variant: 'contained';
  };
  beforeButton?: React.ReactNode;
  autoSave?: boolean;
  formikProps: {
    initialValues: any;
    validationSchema: any;
    onSubmit: (values: any) => void;
  };
}

const getFormikProps = (element: FormElementProps, formik) => {
  return {
    ...element,
    error:
      formik.touched[element.name] && formik.errors[element.name]
        ? true
        : false,
    helperText: formik.touched[element.name] && formik.errors[element.name],
    ...formik.getFieldProps(element.name),
  };
};
/**
 * action to be dispacthed,
 * @Params (title, elements, action, URL, autoSave)
 * @returns
 */
const Form: React.FC<FormProps> = (props: FormProps) => {
  const formik = useFormik(props.formikProps);
  console.log('form comp');
  return (
    <Container>
      <HeadingTextTwo>{props.title}</HeadingTextTwo>
      <form style={{ marginTop: '16px' }} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {props.rows.map((row, index) => {
            return (
              <Grid key={`row-${index}`} item xs={12}>
                {row.elements.map(element => {
                  return (
                    <Grid key={element.name} item>
                      <FormElement {...getFormikProps(element, formik)} />
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
          <Grid item xs={12}>
            {props.beforeButton}
          </Grid>
          <Grid item xs={12}>
            <LoadableButton type="submit" {...props.actionButton} />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
