export default {
  namespaced: true,

  state: {
    items: [],
    isEmpty: true,
  },

  mutations: {},

  actions: {
    async ["loadData"]({ state }) {

      const url = `http://127.0.0.1:3000/restaurant/id/1`;

      let res2 = await fetch(url);
      let res = await res2.json();

      let results = {};
      for (let menu of res.menus) {
        results[menu.name] = menu.plates;
      }
      console.log(results, res);
      state.items = results;
      state.isEmpty = !!state.items.length;
    },
  },
  gettets: {},
};
