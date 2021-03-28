import * as Yup from 'yup';

/* --- STATE --- */
export interface SignupState {
  loading: boolean;
}

export enum RoleType {
  'CUSTOMER' = '2',
  'REPRESENTATIVE' = '3',
}

export interface SignupFormObjType {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  role_id: RoleType;
}

export const validationSchema = Yup.object({
  first_name: Yup.string().required('First Name is required'),
  last_name: Yup.string().required('Last Name is required'),
  email: Yup.string().email().required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  password: Yup.string().required('Password is required'),
  role_id: Yup.mixed().oneOf(['2', '3']).required('Role is required'),
});
