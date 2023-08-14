import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { defineStore } from 'pinia'
import { auth } from '../services/firebase'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: { loggedIn: false, data: {} }
  }),
  getters: {
    user(state) { return state.user }
  },
  actions: {
    SET_LOGGED_IN(state: { user: { loggedIn: any } }, value: any) {
      state.user.loggedIn = value
    },
    SET_USER(state: { user: { data: any } }, data: any) {
      state.user.data = data
    },
    async register(context: { commit: (arg0: string, arg1: any) => void }, { email, password, name }: any) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('SET_USER', response.user)
        let updatedUser = { ...response.user }
        updatedUser.displayName = name
        auth.updateCurrentUser(updatedUser)
      } else {
        throw new Error('[Auth] Unable to register user')
      }
    },
    async logIn(context: { commit: (arg0: string, arg1: any) => void }, { email, password }: any) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
        context.commit('SET_USER', response.user)
      } else {
        throw new Error('[Auth] Login failed')
      }
    },
    async logOut(context: { commit: (arg0: string, arg1: any) => void }) {
      await signOut(auth)
      context.commit('SET_USER', null)
    },
    async fetchUser(context: { commit: (arg0: string, arg1: any) => void }, user: { displayName: any, email: any } | null) {
      context.commit('SET_LOGGED_IN', user !== null)
      if (user) {
        context.commit('SET_USER', user)
      } else {
        context.commit('SET_USER', null)
      }
    }
  }
})
