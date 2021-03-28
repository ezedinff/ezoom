import { Color } from '@material-ui/lab/Alert';

/* --- STATE --- */
export interface AppMessageType {
  message: string | null;
  permanent?: boolean;
  autoHideIn?: number | null;
  severity: Color;
}

export interface AppMessagesState {
  alert: AppMessageType;
  redirectTo: string | null;
}

export type ContainerState = AppMessagesState;
