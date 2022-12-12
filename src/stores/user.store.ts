import { signInWithPopup, GoogleAuthProvider, getAuth, signOut } from 'firebase/auth'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore(
  'user',
  () => {
    const router = useRouter()
    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(getAuth(), new GoogleAuthProvider())
        router.push('/start')
        return result
      } catch {
        console.log('popup closed')
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
        signInWithGoogle,
        logout
    }
  },
)
