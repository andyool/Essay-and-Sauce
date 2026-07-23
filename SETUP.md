# Firebase setup — one-time, ~10 minutes

The site already works in **local mode** (each device keeps its own work). To unlock the
full experience — students' attempts saved to the cloud, visible on any device, and your
**live teacher dashboard** watching them type — connect a free Firebase project by
following these steps once.

Firebase is Google's app platform. The free "Spark" tier is more than enough for a class
(no credit card required).

---

## 1. Create the Firebase project

1. Go to <https://console.firebase.google.com> and sign in with any Google account.
2. Click **Create a project** (or "Add project"), name it e.g. `essay-and-sauce`.
3. You can switch **off** Google Analytics when asked — it isn't needed.
4. Wait for the project to be created and open it.

## 2. Turn on Authentication

1. In the left menu: **Build → Authentication → Get started**.
2. On the **Sign-in method** tab, enable **two** providers:
   - **Anonymous** — this is how students sign in (no accounts or emails needed).
   - **Email/Password** — this is how *you* sign in.
3. Go to the **Users** tab → **Add user** and create your teacher account:
   - Email: `andreas.beerli@hotmail.com` (must match — the security rules and the site
     only grant teacher access to this address)
   - Password: choose a strong one; this is what you'll type into the site's teacher
     sign-in page.
4. On the **Settings** tab of Authentication → **Authorized domains**, make sure
   `andyool.github.io` is in the list (click **Add domain** if not).

## 3. Turn on Firestore (the database)

1. Left menu: **Build → Firestore Database → Create database**.
2. Choose a location near you (e.g. `australia-southeast1`), and start in
   **production mode**.
3. Once created, open the **Rules** tab, delete everything there, and paste the full
   contents of the [`firestore.rules`](firestore.rules) file from this repository.
   Click **Publish**.
   - These rules make the data safe even though the site code is public: students can
     only read/write their own attempts, and only your email can read everything.

## 4. Get the config and put it in the site

1. Click the ⚙️ gear (Project settings) → **General** tab.
2. Under **Your apps**, click the **`</>` (Web)** icon to register a web app. Name it
   anything (e.g. `site`). You do **not** need Firebase Hosting.
3. Firebase shows a `firebaseConfig` code block. Copy the object.
4. In this repository, open [`src/store/firebaseConfig.ts`](src/store/firebaseConfig.ts)
   and replace `null` with the object, so it looks like:

   ```ts
   export const FIREBASE_CONFIG: Record<string, string> | null = {
     apiKey: 'AIza…',
     authDomain: 'essay-and-sauce.firebaseapp.com',
     projectId: 'essay-and-sauce',
     storageBucket: 'essay-and-sauce.appspot.com',
     messagingSenderId: '…',
     appId: '…',
   };
   ```

   (These values are safe to publish — security comes from the rules, not from hiding
   the config.)
5. Commit and push the change (or ask Claude to do it). The site redeploys itself via
   GitHub Actions in ~2 minutes, and the yellow "local mode" banner disappears.

## 5. First run

1. Open the site → **Teacher dashboard** → sign in with the email/password from step 2.
2. Go to the **Classes** tab and create your class — it generates a short join code.
3. Give students the site address and the join code. They enter their name + code, and
   from then on you'll see them in **Students**, their papers in **All attempts**, and —
   while they're working — their typing live under **Live now**.

## Costs and limits

The free tier allows 20,000 database writes and 50,000 reads per day. The site saves a
student's work at most every few seconds while they type, which comfortably fits a class
of 30 doing a full exam session. If you ever run a whole cohort simultaneously every
day, keep an eye on the usage graphs in the Firebase console.

## Troubleshooting

- **"No class found with code …"** — create the class first in the teacher dashboard
  (Classes tab), then give students the code it generates.
- **Teacher sign-in says the account is not registered as a teacher** — the email you
  signed in with doesn't match the one in `src/store/firebaseConfig.ts`
  (`TEACHER_EMAILS`) — and remember to keep `firestore.rules` in sync if you change it.
- **Students see "Missing or insufficient permissions"** — the rules from step 3 weren't
  published, or Anonymous sign-in (step 2) isn't enabled.
