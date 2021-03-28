import { AppMessagesState } from 'app/pages/AppMessages/types';
import { SigninState } from 'app/pages/SignInPage/slice/types';
import { SignupState } from 'app/pages/SignupPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  signin?: SigninState;
  appMessages?: AppMessagesState;
  signup?: SignupState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
