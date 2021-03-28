import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const tabsStyles = makeStyles(({ palette, breakpoints }: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'light',
      borderRadius: 10,
      minHeight: 44,
      paddingLeft: 0,
      paddingRight: 0,
    },
    flexContainer: {
      display: 'inline-flex',
      position: 'relative',
      zIndex: 1,
    },
    scroller: {
      [breakpoints.up('md')]: {
        padding: '0 8px',
      },
    },
    indicator: {
      top: 3,
      bottom: 3,
      right: 3,
      height: 'auto',
      background: 'none',
      color: palette.text.primary,
      '&:after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 4,
        right: 4,
        bottom: 0,
        borderRadius: 8,
        backgroundColor:
          palette.type === 'light' ? '#fff' : palette.action.selected,
      },
    },
  }),
);

export const tabItemStyles = makeStyles(
  ({ palette, breakpoints, spacing }: Theme) =>
    createStyles({
      root: {
        '&:hover': {
          opacity: 1,
        },
        minHeight: 44,
        minWidth: 96,
        color: palette.text.disabled,
        [breakpoints.up('md')]: {
          minWidth: 120,
        },
      },
      wrapper: {
        textTransform: 'initial',
        fontSize: '1.3em',
      },
    }),
);
