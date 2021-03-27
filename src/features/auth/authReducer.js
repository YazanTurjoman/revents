import { SING_IN_USER, SING_OUT_USER } from './authConstants';

const initialState = {
  authenticated: false,
  currentUser: null,
};
export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SING_IN_USER:
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: payload.email,

          photoURL: '/assets/user.png',
        },
      };
    case SING_OUT_USER:
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };

    default:
      return state;
  }
}