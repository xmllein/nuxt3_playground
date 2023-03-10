import { defineStore } from 'pinia'

//  data

const USER_INFO = {
  name: 'John',
  age: 30,
  id: 1,
  gender: 'female',
}

export const useUserStore = defineStore('useInfo', () => {
  const useInfo = reactive(USER_INFO)

  return {
    useInfo,
  }
})
