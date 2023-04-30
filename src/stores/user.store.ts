import { signInWithPopup, GoogleAuthProvider, getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import vlandApi, { User } from '../apis/vland.api'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore(
  'user',
  () => {
    const auth = getAuth()
    const router = useRouter()

    const user = ref<User | undefined>()

    const token = ref<string | undefined>()

    const error = ref('')

    const signInWithGoogle = async () => {
      error.value = ''
      try {
        const result = await signInWithPopup(getAuth(), new GoogleAuthProvider())
        router.push('/start')
        return result
      } catch {
        const msg = 'Error: On sign in with Google. Popup closed'
        error.value = msg
        console.error(msg)
      }
    }

    const signInWithEmailPassword = async (email: string, password: string) => {
      error.value = ''
      try {
        const result = await signInWithEmailAndPassword(getAuth(), email, password)
        token.value = await result.user.getIdToken()
        router.push('/start')
        return result
      } catch {
        const msg = 'Error: On sign in with Email and Password'
        error.value = msg
        console.error(msg)
      }
    }

    const signUpWithEmailPassword = async (email: string, password: string) => {
      error.value = ''
      try {
        const result = await createUserWithEmailAndPassword(getAuth(), email, password)
        router.push('/start')
        return result
      } catch {
        const msg = 'Error: On sign up with Email and Password'
        error.value = msg
        console.error(msg)
      }
    }

    const logout = async () => {
      try {
        await signOut(getAuth())
        token.value = ''
        router.push('/')
      } catch {
        console.log('Error: logout')
      }
    }

    const loadUserData = async () => {
      const token = await auth.currentUser?.getIdToken()
      if (!token) return
      // TODO: remove
      sessionStorage.setItem('token-example', token)
      user.value = await vlandApi.users.me.get(token)
      return user.value
    }

    const loadUserId = async (): Promise<string | undefined> => {
      if (!!user.value?._id) return user.value._id
      const data = await loadUserData()
      return data?._id
    }

    const updateUserNickname = async (nickname: string) => {
      const token = await auth.currentUser?.getIdToken()
      if (!token) return
      const response = await vlandApi.users.me.nickname.put({
        nickname: nickname
      }, token)
      user.value = response
    }

    auth.onAuthStateChanged(async (authUser) => {
      token.value = await authUser?.getIdToken()

      if (!authUser) {
        user.value = undefined
        return
      }

      loadUserData()
    })

    return {
      signInWithGoogle,
      signInWithEmailPassword,
      signUpWithEmailPassword,
      logout,
      token,
      user,
      loadUserId,
      error,
      updateUserNickname
    }
  },
)
