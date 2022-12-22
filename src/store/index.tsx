import Store, { Module } from 'diox';

const myStore = new Store();

const exampleForm: Module<{ firstName: string, lastName: string, age: number }> = {
  state: {
    firstName: '',
    lastName: '',
    age: 0
  },
  mutations: {
    CHANGE_VALUE_BANANA({ state }, data) {
      return {
        ...state,
        [data.field]: data.value,
      };
    },
    CHANGE_VALUE_SIMPLE_STATE({ state }, data) {
      return {
        ...state,
        age: data.value,
      };
    },
  },
  actions: {
  },
};

myStore.register('exampleForm', exampleForm);

myStore.subscribe('exampleForm', (newState) => {
  console.log('New mutation ! ', newState);
});

export {
  myStore
}