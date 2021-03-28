/**
 *
 * SignupPage
 *
 */
import {
  Button,
  FormControl,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
  useTheme,
} from '@material-ui/core';
import Auth from 'app/components/Auth';
import FormElement from 'app/components/Forms/FormElement';
import TextInput from 'app/components/Forms/TextInput';
import { HeadingTextTwo } from 'app/components/HeadingText';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { SignupFormObjType, validationSchema, RoleType } from './slice/types';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignup } from './slice/selectors';
import { useSignupSlice } from './slice';
import LoadableButton from 'app/components/buttons/LoadableButton';
import RadioInput from 'app/components/Forms/RadioInput';
const initialValues: SignupFormObjType = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  password: '',
  role_id: RoleType.CUSTOMER,
};
interface Props {
  theme: any;
  loading: boolean;
  formik: any;
}

const accountTypeOptions = [
  { label: 'Individual', value: '2' },
  { label: 'Business Representative', value: '3' },
];

// const SignupForm: React.FC<Props> = React.memo(({ theme, loading, formik }) => {
//   return (
//     <>
//       <div style={{ marginBottom: '16px' }}>
//         <HeadingTextTwo>Create an account</HeadingTextTwo>
//       </div>
//       <form onSubmit={formik.handleSubmit} style={{ width: '100%', }}>
//         <FormElement label={'Account Type'}>
//           <br/>
//           <RadioInput
//             order="row"
//             label={'Account Type'}
//             options={accountTypeOptions}
//             error={
//               formik.touched.role_id && formik.errors.role_id ? true : false
//             }
//             helperText={formik.touched.role_id && formik.errors.role_id}
//             {...formik.getFieldProps('role_id')}
//           />
//         </FormElement>
//         <div
//           style={{
//             display: 'flex',
//             width: '100%',
//             marginTop: '8px',
//             justifyItems: 'space-between',
//           }}
//         >
//           <div style={{ width: '100%', marginRight: '24px' }}>
//             <FormElement label="First Name">
//               <TextInput
//                 example={'Don'}
//                 label={'First Name'}
//                 error={
//                   formik.touched.first_name && formik.errors.first_name
//                     ? true
//                     : false
//                 }
//                 helperText={
//                   formik.touched.first_name && formik.errors.first_name
//                 }
//                 {...formik.getFieldProps('first_name')}
//               />
//             </FormElement>
//           </div>
//           <div style={{ width: '100%' }}>
//             <FormElement label={'Last Name'}>
//               <TextInput
//                 label={'Last Name'}
//                 example={'Joe'}
//                 error={
//                   formik.touched.last_name && formik.errors.last_name
//                     ? true
//                     : false
//                 }
//                 helperText={formik.touched.last_name && formik.errors.last_name}
//                 {...formik.getFieldProps('last_name')}
//               />
//             </FormElement>
//           </div>
//         </div>

//         <div style={{ marginTop: '8px', width: '100%' }}>
//           <FormElement label={'Phone Number'}>
//             <TextInput
//               label={'Phone Number'}
//               example={'+251-9000-000'}
//               error={formik.touched.phone && formik.errors.phone ? true : false}
//               helperText={formik.touched.phone && formik.errors.phone}
//               {...formik.getFieldProps('phone')}
//             />
//           </FormElement>
//         </div>

//         <div style={{ marginTop: '8px', width: '100%' }}>
//           <FormElement label={'Email'}>
//             <TextInput
//               label={'Email'}
//               example={'donjoe@mail.com'}
//               error={formik.touched.email && formik.errors.email ? true : false}
//               helperText={formik.touched.email && formik.errors.email}
//               {...formik.getFieldProps('email')}
//             />
//           </FormElement>
//         </div>

//         <div style={{ marginTop: '8px', width: '100%' }}>
//           <FormElement label={'Password'}>
//             <TextInput
//               label={'Password'}
//               type="password"
//               error={
//                 formik.touched.password && formik.errors.password ? true : false
//               }
//               helperText={formik.touched.password && formik.errors.password}
//               {...formik.getFieldProps('password')}
//             />
//           </FormElement>
//         </div>
//         <LoadableButton
//           type="submit"
//           size="large"
//           loading={loading}
//           style={{ marginTop: theme.spacing(3) }}
//           fullWidth
//           color="primary"
//           variant="contained"
//           disableElevation
//         >
//           Signup
//         </LoadableButton>
//       </form>

//       <div
//         style={{
//           display: 'flex',
//           width: '100%',
//           marginTop: '24px',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography
//           style={{ margin: '0 16px' }}
//           variant="subtitle2"
//           color="textPrimary"
//         >
//           Already have an account ?
//         </Typography>
//         <Link
//           {...{
//             component: RouterLink,
//             to: '/sign-in',
//             color: 'secondary',
//             style: { fontWeight: 'bold' },
//           }}
//         >
//           SignIn
//         </Link>
//       </div>
//     </>
//   );
// });

interface Props {}

export function SignupPage(props: Props) {
  const { actions } = useSignupSlice();
  const { loading } = useSelector(selectSignup);
  const dispatch = useDispatch();
  const theme = useTheme();
  const onSignUpSubmit = (values: SignupFormObjType) => {
    dispatch(actions.signUpAction(values));
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSignUpSubmit,
  });

  return (
    <>
      <Helmet>
        <title>SignUp</title>
        <meta name="description" content="Maleda Sign-up" />
      </Helmet>

      <main>
        <Auth>
          <></>
        </Auth>
      </main>
    </>
  );
}
