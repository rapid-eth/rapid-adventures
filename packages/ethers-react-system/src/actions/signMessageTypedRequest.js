import { hashCode } from '../utilities';
import { SIGN_TYPED_MESSAGE_REQUEST } from '../types';
export const signMessageTyped = (state, dispatch) => ({ message, delta }) =>
  dispatch({
    type: SIGN_TYPED_MESSAGE_REQUEST,
    payload: message,
    id: delta || hashCode(message.toString())
  });
