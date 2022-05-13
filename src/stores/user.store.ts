import { defineStore } from 'pinia'
import { reactive } from 'vue'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore(
  'user',
  () => {
    const user = reactive({
        uid: '3g3gerg-erg',
        displayName: 'Wenish',
        email: 'test@test.com',
        avatar: 'NiceChar1'
    })

    return {
        user,
    }
  },
)
