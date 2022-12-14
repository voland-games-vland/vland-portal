import { signInWithPopup, GoogleAuthProvider, getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore(
  'user',
  () => {
    const router = useRouter()

    const coins = ref(400)
    const banknotes = ref(720)

    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(getAuth(), new GoogleAuthProvider())
        router.push('/start')
        return result
      } catch {
        console.log('Error: popup closed')
      }
    }

    const signInWithEmailPassword = async (email: string, password: string) => {
      try {
        const result = await signInWithEmailAndPassword(getAuth(), email, password)
        router.push('/start')
        return result
      } catch {
        console.log('Error: Sign In With Email and Password')
      }
    }

    const signUpWithEmailPassword = async (email: string, password: string) => {
      try {
        const result = await createUserWithEmailAndPassword(getAuth(), email, password)
        router.push('/start')
        return result
      } catch {
        console.log('Error: Sign Up with Email and Password')
      }
    }
    
    const logout = async () => {
      try {
        await signOut(getAuth())
        router.push('/')
      } catch {
        console.log('Error: logout')
      }
    }

    return {
        coins,
        banknotes,
        signInWithGoogle,
        signInWithEmailPassword,
        signUpWithEmailPassword,
        logout
    }
  },
)
