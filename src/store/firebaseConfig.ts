// ============================================================================
// FIREBASE CONFIGURATION
//
// Until this is filled in, the site runs in LOCAL MODE: everything works on a
// single device, but attempts are not synced and the teacher dashboard cannot
// see students on other devices.
//
// To unlock cloud sync + realtime teacher oversight, follow SETUP.md, then
// replace `null` below with the config object from your Firebase project, e.g.:
//
// export const FIREBASE_CONFIG = {
//   apiKey: 'AIza...',
//   authDomain: 'essay-and-sauce.firebaseapp.com',
//   projectId: 'essay-and-sauce',
//   storageBucket: 'essay-and-sauce.appspot.com',
//   messagingSenderId: '1234567890',
//   appId: '1:1234567890:web:abc123',
// };
//
// (These values are safe to commit — access is controlled by Firestore
// security rules, not by hiding the config.)
// ============================================================================

export const FIREBASE_CONFIG: Record<string, string> | null = null;

// Email address(es) allowed to use the teacher dashboard in cloud mode.
// Must match the account(s) you create in Firebase Authentication and the
// email listed in the Firestore security rules (see SETUP.md).
export const TEACHER_EMAILS = ['andreas.beerli@hotmail.com'];
