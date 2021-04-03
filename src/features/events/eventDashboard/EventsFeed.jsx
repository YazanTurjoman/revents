import React from 'react';
import { Feed, Header, Segment } from 'semantic-ui-react';

export default function EventsFeed() {
  const image =
    'https://firebasestorage.googleapis.com/v0/b/revents-aad53.appspot.com/o/RxHzP1tgMYUezIOXDTZjxjoW8yR2%2Fuser_images%2Fckmxf4nsd00003a65tlmitgoz.jpg?alt=media&token=ed6caafc-8cc2-427f-b083-77b34b200b1d';
  const data = '3 days ago';
  const summary = 'Diana jonined an event';

  return (
    <>
      <Header attached color='teal' icon='newspaper' content='News feed' />
      <Segment attached='bottom'>
        <Feed>
          <Feed.Event image={image} date={data} summary={summary} />
          <Feed.Event image={image} date={data} summary={summary} />
          <Feed.Event image={image} date={data} summary={summary} />
        </Feed>
      </Segment>
    </>
  );
}
