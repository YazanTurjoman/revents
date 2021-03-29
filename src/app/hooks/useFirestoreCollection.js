import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from '../async/asyncReducer';
import { dataFromSnapshot } from '../firestore/firestoreService';

export default function useFirestoreCollection({ query, data, deps }) {
  const disatch = useDispatch();

  useEffect(() => {
    disatch(asyncActionStart());
    const unsubscribe = query().onSnapshot(
      (sanpshot) => {
        const docs = sanpshot.docs.map((doc) => dataFromSnapshot(doc));
        data(docs);
        disatch(asyncActionFinish());
      },
      (error) => disatch(asyncActionError())
    );
    return () => {
      unsubscribe();
    };
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}
