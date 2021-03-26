import React, { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';
import {sampleData} from '../../../app/api/sampleData.js'

const EventDashboard = () => {
    const [events, setEvents] = useState(sampleData);

  /*    function handleCreateEvent (event) {
        setEvents([...events,event])
    }

    function handleUpdateEvent (updatedEvent) {
        setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
    }
*/
    function handleDeleteEvent (eventID) {
        setEvents(events.filter(evt => evt.id !== eventID ));
    }


    

    return (
    <Grid>
        <GridColumn width={10}>
        <EventList events={events}  deleteEvent={handleDeleteEvent}/>
        </GridColumn>
        <GridColumn width={6}>
           <h2>Events Filters</h2>
        </GridColumn>
    </Grid>
    );
}

export default EventDashboard;