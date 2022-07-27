import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

export const logFirebaseEvent = (message) => {
  //  Please see the following for information on API security
  // https://firebase.google.com/support/guides/security-checklist?authuser=1#api-keys-not-secret
  const firebaseConfig = {
    apiKey: 'AIzaSyDwCgmlicV7O6EID0L9WvCL2Kac8VGxPEM',
    authDomain: 'portfolio-site-90f4e.firebaseapp.com',
    projectId: 'portfolio-site-90f4e',
    storageBucket: 'portfolio-site-90f4e.appspot.com',
    messagingSenderId: '489105023792',
    appId: '1:489105023792:web:2723a8770b988f913c1ef5',
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  logEvent(analytics, message);
};

export default logFirebaseEvent;
