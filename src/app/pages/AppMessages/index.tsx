/**
 *
 * AppMessages
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey, actions, initialState } from './slice';
import { selectAppMessages } from './selectors';

import SnackBarAlert from 'app/components/SnackBarAlert';
import { useHistory } from 'react-router-dom';
import useIsOnline from 'app/hooks/useIsOnline';

interface Props {}

export const AppMessages = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const appMessages = useSelector(selectAppMessages);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const isOnline = useIsOnline();
  const [showNoConnection, setShowNoConnection] = React.useState(false);
  const [showAppAlert, setShowAppAlert] = useState(false);

  const history = useHistory();

  // Handle connection interuptions
  useEffect(() => {
    if (!showNoConnection && !isOnline) {
      setShowNoConnection(true);
    } else if (showNoConnection && isOnline) {
      setShowNoConnection(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnline]);

  // Listen for alert message changes
  useEffect(() => {
    if (appMessages.alert.message) {
      setShowAppAlert(true);
    } else {
      setShowAppAlert(false);
    }
  }, [appMessages.alert.message]);

  // Listen to redirects
  useEffect(() => {
    if (appMessages.redirectTo) {
      dispatch(actions.setRedirectTo(null));
      history.push(appMessages.redirectTo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appMessages.redirectTo]);

  /**
   * Dispatches action to set message to none
   */
  const closeAppAlertMessage = () => {
    dispatch(actions.setAppAlert({ ...initialState.alert, message: null }));
  };

  return (
    <React.Fragment>
      <SnackBarAlert
        open={showNoConnection}
        message="No Internet Connection"
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        onClose={() => setShowNoConnection(false)}
        severity="warning"
      />
      <SnackBarAlert
        open={showAppAlert}
        message={appMessages.alert.message}
        severity={appMessages.alert.severity}
        onClose={appMessages.alert.permanent ? undefined : closeAppAlertMessage}
        autoHideDuration={appMessages.alert.autoHideIn}
      />
    </React.Fragment>
  );
});
