import React from 'react';
import { Link } from 'react-router-dom';
import {  Dropdown, Image, Menu } from 'semantic-ui-react';

const SignedOutMenu = ({singOut}) => {
    return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src='/assets/user.png'/>
        <Dropdown pointing='top left' text='ROMA'>
            <Dropdown.Menu>
            <Dropdown.Item  as={Link} to='/createEvent' text='Create Event' icon='plus' />
            <Dropdown.Item  text='My profile' icon='user'/>
            <Dropdown.Item  onClick={ singOut } text='Sign out' icon='power'/>
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
    )
    
}

export default SignedOutMenu;