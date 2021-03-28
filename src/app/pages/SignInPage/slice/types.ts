/* --- STATE --- */
export interface SigninState {
  loggingIn: boolean;
}

export interface SigninActionPayload {
  email: string;
  password: string;
}
