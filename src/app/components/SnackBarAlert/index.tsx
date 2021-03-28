/**
 *
 * SnackBarAlert
 *
 */
import React, { memo, ReactNode } from 'react';
import MUAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import { Snackbar, SnackbarOrigin } from '@material-ui/core';

interface Props {
  open: boolean;
  severity?: Color;
  onClose?: () => void;
  message: ReactNode;
  autoHideDuration?: number | null;
  anchorOrigin?: SnackbarOrigin;
  closeOnClickAway?: boolean;
}

const SnackBarAlert = memo((props: Props) => {
  const Alert = (props: AlertProps) => (
    <MUAlert elevation={6} variant="filled" {...props} />
  );

  return (
    <Snackbar
      ClickAwayListenerProps={{
        onClickAway: props.closeOnClickAway ? props.onClose : () => {},
      }}
      anchorOrigin={props.anchorOrigin}
      onClose={props.onClose}
      open={props.open}
      autoHideDuration={props.autoHideDuration}
    >
      <Alert onClose={props.onClose} severity={props.severity}>
        {props.message}
      </Alert>
    </Snackbar>
  );
});

export default SnackBarAlert;
