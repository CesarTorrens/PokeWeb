import { defineStore } from 'pinia';

import { User } from 'src/models/user.model';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: [] as Array<User>,
    userLog: {} as User,
    navbar: true as boolean,
  }),
  getters: {
    getUsers(): Array<User> {
      return this.userData;
    },
    getUserLog(): User {
      return this.userLog;
    },
    getValueNavbar(): boolean {
      return this.navbar;
    },
  },
  actions: {
    addUser(user: User) {
      this.userData.push(user);
    },
    logUser(user: User) {
      this.userLog = user;
    },
    changeNavbar(change: boolean) {
      this.navbar = change;
    },
  },
});
