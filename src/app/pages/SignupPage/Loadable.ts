/**
 *
 * Asynchronously loads the component for SignupPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SignupPage = lazyLoad(
  () => import('./index'),
  module => module.SignupPage,
);
