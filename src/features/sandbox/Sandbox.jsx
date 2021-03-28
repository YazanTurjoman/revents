import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';
import { decrement, increment } from './testReducer';
import TestPlaceInput from './TestPlaceInput';
import SimpleMap from './TestMap';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const [location, setLocation] = useState(defaultProps);

  function handleSetLocation(latLng) {
    setLocation({
      ...location,
      center: { lat: latLng.lat, lng: latLng.lng },
    });
  }
  return (
    <>
      <h1>Testing 123</h1>
      <h3>the data is: {data}</h3>
      <Button
        onClick={() => dispatch(increment(100))}
        color='green'
        content='INCREMENT_COUNTER'
      />
      <Button
        onClick={() => dispatch(decrement(100))}
        color='red'
        content='DECREMENT_COUNTER'
      />
      <Button
        onClick={() =>
          dispatch(
            openModal({
              modalType: 'TestModal',
              modalProps: { data },
            })
          )
        }
        color='teal'
        content='open modal'
      />
      <div style={{ marginTop: 15 }}>
        <TestPlaceInput setLocation={handleSetLocation} />
        <SimpleMap location={location} />
      </div>
    </>
  );
};

export default Sandbox;
