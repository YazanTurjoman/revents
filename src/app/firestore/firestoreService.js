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

export async function updateUserProfilePhoto(downloadURL, filename) {
  const user = firebase.auth().currentUser;
  const userDocRef = db.collection('users').doc(user.uid);
  try {
    const userDoc = await userDocRef.get();
    if (!userDoc.data().photoURL) {
      await db.collection('users').doc(user.uid).update({
        photoURL: downloadURL,
      });
      await user.updateProfile({
        photoURL: downloadURL,
      });
    }
    return await db.collection('users').doc(user.uid).collection('photos').add({
      name: filename,
      url: downloadURL,
    });
  } catch (error) {
    throw error;
  }
}

export function getUserPhotos(userUid) {
  return db.collection('users').doc(userUid).collection('photos');
}

export async function setMainPhoto(photo) {
  const user = firebase.auth().currentUser;
  try {
    await db.collection('users').doc(user.uid).update({
      photoURL: photo.url,
    });
    return await user.updateProfile({
      photoURL: photo.url,
    });
  } catch (error) {
    throw error;
  }
}

export function deletePhotoFromCollection(photoId) {
  const userUid = firebase.auth().currentUser.uid;
  return db
    .collection('users')
    .doc(userUid)
    .collection('photos')
    .doc(photoId)
    .delete();
}
