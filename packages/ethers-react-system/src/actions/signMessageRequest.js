import { hashCode } from '../utilities';
import { SIGN_MESSAGE_REQUEST } from '../types';
export const signMessage = (state, dispatch) => ({ message, delta }) =>
  dispatch({
    type: SIGN_MESSAGE_REQUEST,
    payload: message,
    id: delta || hashCode(message)
  });
