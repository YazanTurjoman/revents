import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dropdown, Image, Menu } from 'semantic-ui-react';
import { singOutFirebase } from '../../app/firestore/firebaseService';

const SignedOutMenu = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();

  async function handleSingOut() {
    try {
      history.push('/');
      await singOutFirebase();
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <Menu.Item position='right'>
      <Image
        avatar
        spaced='right'
        src={currentUser.photoURL || '/assets/user.png'}
      />
      <Dropdown pointing='top left' text={currentUser.displayName}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to='/createEvent'
            text='Create Event'
            icon='plus'
          />
          <Dropdown.Item text='My profile' icon='user' />
          <Dropdown.Item
            as={Link}
            to='/account'
            text='My account'
            icon='setting'
          />
          <Dropdown.Item onClick={handleSingOut} text='Sign out' icon='power' />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedOutMenu;
