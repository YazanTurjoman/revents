import { SING_IN_USER, SING_OUT_USER } from './authConstants';

export function singInUser(payload) {
  return {
    type: SING_IN_USER,
    payload,
  };
}

export function singOutUser(payload) {
  return {
    type: SING_OUT_USER,
  };
}
