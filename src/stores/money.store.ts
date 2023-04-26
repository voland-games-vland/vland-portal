import { getAuth } from 'firebase/auth'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import vlandApi, { Money } from '../apis/vland.api'

export const useMoneyStore = defineStore(
  'money',
  () => {
    const auth = getAuth()

    const money = ref<Money>()
    
    const loadUserMeMoney = async () => {
        const token = await auth.currentUser?.getIdToken()
        if(!token) return
        money.value = await vlandApi.users.me.money.get(token)
    }

    return {
        money,
        loadUserMeMoney
    }
  },
)
