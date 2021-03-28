import * as Yup from 'yup';
import { FormElementProps } from '../../components/Forms/FormElement';

export const signInForm: { elements: FormElementProps[] }[] = [
  {
    elements: [{ name: 'email', label: 'Email', type: 'text' }],
  },
  {
    elements: [{ name: 'password', label: 'Password', type: 'password' }],
  },
];

export const validationSchema = Yup.object({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export interface LoginObjectType {
  email: string;
  password: string;
}
