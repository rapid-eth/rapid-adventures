import { hashCode } from '../utilities';
import { DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST } from '../types';
export const contractDeployFromBytecodeRequest = (state, dispatch) => (
  abi,
  bytecode,
  delta
) =>
  dispatch({
    type: DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST,
    input: bytecode,
    delta: delta || hashCode(abi)
  });
