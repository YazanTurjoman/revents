import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Image } from 'semantic-ui-react';

export default function ProfileCard({ profile }) {
  return (
    <Card as={Link} to={`/profile/${profile.id}`}>
      <Image src={profile.photoURL || '/assets/user.png'} />
      <Card.Content>
        <CardHeader content={profile.displayName} />
      </Card.Content>
    </Card>
  );
}
