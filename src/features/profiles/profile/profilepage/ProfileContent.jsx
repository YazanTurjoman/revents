import React, { useState } from 'react';
import { Tab } from 'semantic-ui-react';
import AboutTab from './AboutTab';
import EventsTab from './EventsTap';
import FollowingTap from './FollowingTap';
import PhotoTap from './PhotoTap';

export default function ProfileContent({ profile, isCurrentUser }) {
  const [activeTab, setActiveTab] = useState(0);
  const panes = [
    {
      menuItem: 'About',
      render: () => (
        <AboutTab profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    {
      menuItem: 'Photos',
      render: () => (
        <PhotoTap profile={profile} isCurrentUser={isCurrentUser} />
      ),
    },
    { menuItem: 'Events', render: () => <EventsTab profile={profile} /> },
    {
      menuItem: 'Followers',
      render: () => (
        <FollowingTap
          key={profile.id}
          profile={profile}
          activeTab={activeTab}
        />
      ),
    },
    {
      menuItem: 'Following',
      render: () => (
        <FollowingTap
          key={profile.id}
          profile={profile}
          activeTab={activeTab}
        />
      ),
    },
  ];
  return (
    <Tab
      menu={{ fluid: true, vertical: true }}
      menuPosition='right'
      panes={panes}
      onTabChange={(e, data) => setActiveTab(data.activeIndex)}
    />
  );
}
