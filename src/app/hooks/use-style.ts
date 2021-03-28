import { createStyles, makeStyles, Theme } from '@material-ui/core/';

export default function useStyle(styles) {
  return makeStyles((theme: Theme) => createStyles({ ...styles }))();
}
