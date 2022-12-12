import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export async function setupFirebase(firebaseConfig: FirebaseOptions) {
  const app = initializeApp(firebaseConfig)
  const auth = getAuth()
  await new Promise((resolve) => {
    const unsub = auth.onAuthStateChanged((user) => {
      unsub()
      resolve(user)
    })
  })
  return app
}
