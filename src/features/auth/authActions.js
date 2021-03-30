import { SING_IN_USER, SING_OUT_USER } from './authConstants';
import firebase from '../../app/config/firebase';
import { APP_LOADED } from '../../app/async/asyncReducer';
import {
  dataFromSnapshot,
  getUserProfile,
} from '../../app/firestore/firestoreService';
import { listenToCurrentUserProfile } from '../../features/profiles/profileActions';

export function singInUser(user) {
  return {
    type: SING_IN_USER,
    payload: user,
  };
}
export function verifyAuth() {
  return function (dispatch) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(singInUser(user));
        const profileRef = getUserProfile(user.uid);
        profileRef.onSnapshot((snapshot) => {
          dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)));
          dispatch({ type: APP_LOADED });
        });
      } else {
        dispatch(singOutUser());
        dispatch({ type: APP_LOADED });
      }
    });
  };
}

export function singOutUser() {
  return {
    type: SING_OUT_USER,
  };
}
