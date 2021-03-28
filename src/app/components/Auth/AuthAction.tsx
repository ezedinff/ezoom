import React from 'react';
import Link from '@material-ui/core/Link/Link';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography/Typography';

export default function ({ path, actionButton, actionLabel }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        marginTop: '24px',
        justifyContent: 'center',
      }}
    >
      <Typography
        style={{ margin: '0 16px' }}
        variant="subtitle2"
        color="textPrimary"
      >
        {actionLabel}
      </Typography>
      <Link
        {...{
          component: RouterLink,
          to: path,
          color: 'secondary',
          style: { fontWeight: 'bold' },
        }}
      >
        {actionButton}
      </Link>
    </div>
  );
}
