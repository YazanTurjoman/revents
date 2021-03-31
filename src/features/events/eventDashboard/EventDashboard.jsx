import React, { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';
import { useDispatch, useSelector } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilteres from './EventFilteres';
import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';
import { listenToEventsFromFirestore } from '../../../app/firestore/firestoreService';
import { listenToEvents } from '../eventActions';

const EventDashboard = () => {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);
  const dispatch = useDispatch();
  const [predicate, setPredicate] = useState(
    new Map([
      ['startDate', new Date()],
      ['filter', 'all'],
    ])
  );
  function handleSetPredicate(key, value) {
    setPredicate(new Map(predicate.set(key, value)));
  }
  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(predicate),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch, predicate],
  });

  return (
    <Grid>
      <GridColumn width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </GridColumn>
      <GridColumn width={6}>
        <EventFilteres
          predicate={predicate}
          setPredicate={handleSetPredicate}
          loading={loading}
        />
      </GridColumn>
    </Grid>
  );
};

export default EventDashboard;
