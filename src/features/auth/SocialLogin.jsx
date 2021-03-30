import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { closeModal } from '../../app/common/modals/modalReducer';
import { socialLogin } from '../../app/firestore/firebaseService';

export default function SocialLogin() {
  const dispatch = useDispatch();

  function handleSocialLogin(provider) {
    dispatch(closeModal());
    socialLogin(provider);
  }

  return (
    <>
      <Button
        icon='facebook'
        fluid
        color='facebook'
        content='Login with Facebook'
        style={{ marginBottom: 10 }}
        onClick={() => handleSocialLogin('facebook')}
      />
      <Button
        icon='google'
        fluid
        color='google plus'
        content='Login with Google'
        onClick={() => handleSocialLogin('google')}
      />
    </>
  );
}
