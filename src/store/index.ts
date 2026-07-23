import { CloudStore } from './cloud';
import { FIREBASE_CONFIG } from './firebaseConfig';
import { LocalStore } from './local';
import type { Store } from './types';

// The Firebase SDK is only initialised when a config is present; in local mode
// the CloudStore class is imported but never constructed.
const store: Store = FIREBASE_CONFIG ? new CloudStore(FIREBASE_CONFIG) : new LocalStore();

export function getStore(): Store {
  return store;
}
