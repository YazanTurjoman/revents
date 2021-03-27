import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';
import { decrement, increment } from './testReducer';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
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
    </>
  );
};

export default Sandbox;
