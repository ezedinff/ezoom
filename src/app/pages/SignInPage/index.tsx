/**
 *
 * SignInPage
 *
 */
import { useTheme } from '@material-ui/core';
import Auth from 'app/components/Auth';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { LoginObjectType, signInForm, validationSchema } from './form';
import { useSigninSlice } from './slice/index';
import { useFormik } from 'formik';
import { selectSignin } from './slice/selectors';
import Form from 'app/components/Forms/Form';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link/Link';
import AuthAction from 'app/components/Auth/AuthAction';
const initialValues: LoginObjectType = {
  email: '',
  password: '',
};
interface Props {
  onSubmit: (values: LoginObjectType) => void;
  theme: any;
  loggingIn: boolean;
}
// const SigninForm: React.FC<Props> = ({ onSubmit, theme, loggingIn }) => {

//   return (
//     <>
//       <HeadingTextTwo>Login</HeadingTextTwo>
//       <form
//         onSubmit={formik.handleSubmit}
//         style={{
//           width: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <div style={{ width: '100%', margin: '12px 0' }}>
//           <FormElement label="Email">
//             <TextInput
//               label={'Email'}
//               error={formik.touched.email && formik.errors.email ? true : false}
//               helperText={formik.touched.email && formik.errors.email}
//               {...formik.getFieldProps('email')}
//             />
//           </FormElement>
//         </div>
//         <div style={{ width: '100%', margin: '12px 0' }}>
//           <FormElement label={'Password'}>
//             <TextInput
//               label={'Password'}
//               type={'password'}
//               error={
//                 formik.touched.password && formik.errors.password ? true : false
//               }
//               helperText={formik.touched.password && formik.errors.password}
//               {...formik.getFieldProps('password')}
//             />
//           </FormElement>
//         </div>
//         <div style={{ alignSelf: 'flex-end' }}>
//           <Link
//             {...{
//               component: RouterLink,
//               to: '/forgot-password',
//               color: 'textPrimary',
//             }}
//           >
//             Forgot password ?
//           </Link>
//         </div>
//         <div style={{ width: '100%', paddingTop: '32px' }}>
//           <LoadableButton
//             type="submit"
//             size="large"
//             loading={loggingIn}
//             style={{ marginTop: theme.spacing(3) }}
//             fullWidth
//             color="primary"
//             variant="contained"
//             disableElevation
//           >
//             Login
//           </LoadableButton>
//         </div>

//         <div
//           style={{
//             display: 'flex',
//             width: '100%',
//             marginTop: '24px',
//             justifyContent: 'center',
//           }}
//         >
//           <Typography
//             style={{ margin: '0 16px' }}
//             variant="subtitle2"
//             color="textPrimary"
//           >
//             Dont't have an account ?
//           </Typography>
//           <Link
//             {...{
//               component: RouterLink,
//               to: '/sign-up',
//               color: 'secondary',
//               style: { fontWeight: 'bold' },
//             }}
//           >
//             Signup
//           </Link>
//         </div>
//       </form>
//     </>
//   );
// };

const ForgotPassword = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Link
        {...{
          component: RouterLink,
          to: '/forgot-password',
          color: 'textPrimary',
        }}
      >
        Forgot password ?
      </Link>
    </div>
  );
};
interface Props {}

export function SignInPage(props: Props) {
  const { actions } = useSigninSlice();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { loggingIn } = useSelector(selectSignin);
  const onSubmit = (values: LoginObjectType) => {
    dispatch(actions.signInAction(values));
  };
  return (
    <>
      <Helmet>
        <title>SignIn</title>
        <meta name="description" content="Maleda Sign-in" />
      </Helmet>

      <main>
        <Auth>
          <Form
            title={'Login'}
            actionButton={{
              children: 'Login',
              loading: loggingIn,
              fullWidth: true,
              color: 'primary',
              variant: 'contained',
            }}
            formikProps={{
              initialValues,
              onSubmit,
              validationSchema,
            }}
            rows={signInForm}
            beforeButton={<ForgotPassword />}
          />
          <AuthAction
            actionButton={'Signup'}
            path={'/sign-up'}
            actionLabel={"Don't have an account?"}
          />
        </Auth>
      </main>
    </>
  );
}
