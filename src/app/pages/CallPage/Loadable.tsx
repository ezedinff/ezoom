/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const CallPage = lazyLoad(
  () => import('./index'),
  module => module.CallPage,
);
