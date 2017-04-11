export const COUNT_ADD = 'COUNT_ADD';

export default {
  state: {
    count: 0
  },
  mutations: {
    [COUNT_ADD](state, user) {
      state.count++;
    }
  },
  actions: {
    add({commit}) {
      commit(COUNT_ADD);
    }
  }
};
