import cuid from 'cuid';
import firebase from '../config/firebase';

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToEventsFromFirestore() {
  return db.collection('events').orderBy('date');
}

export function listenToEventFromFirestore(eventID) {
  return db.collection('events').doc(eventID);
}

export function addEventToFirestore(event) {
  return db.collection('events').add({
    ...event,
    hostedBy: 'Diana',
    hostPhotoURL:
      'https://i.pinimg.com/originals/c2/c8/6b/c2c86b484c37e72d8e6834abc3206a47.jpg',
    attendees: firebase.firestore.FieldValue.arrayUnion({
      id: cuid(),
      dispalyName: 'Diana',
      PhotoURL:
        'https://i.pinimg.com/originals/c2/c8/6b/c2c86b484c37e72d8e6834abc3206a47.jpg',
    }),
  });
}

export function updateEventToFirestore(event) {
  return db.collection('events').doc(event.id).update(event);
}

export function deleteEventToFirestore(eventID) {
  return db.collection('events').doc(eventID).delete();
}

export function cancelEventToFirestore(event) {
  return db.collection('events').doc(event.id).update({
    isCancelled: !event.isCancelled,
  });
}

export function setUserProfileData(user) {
  return db
    .collection('users')
    .doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL || null,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
}

export function getUserProfile(userId) {
  return db.collection('users').doc(userId);
}

export async function updateUserProfile(profile) {
  const user = firebase.auth().currentUser;
  try {
    if (user.dispalyName !== profile.dispalyName) {
      await user.updateProfile({
        displayName: profile.displayName,
      });
    }
    return await db.collection('users').doc(user.uid).update(profile);
  } catch (error) {
    throw error;
  }
}
