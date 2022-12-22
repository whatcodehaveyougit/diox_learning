import Store, { Module } from 'diox';

const myStore = new Store();

const form1: Module<{ firstName: string, lastName: string, age: number }> = {
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

const form2: Module<{ occupation: string, favouriteColor: string }> = {
  state: {
    occupation: '',
    favouriteColor: ''
  },
  mutations: {
    CHANGE_VALUE_BANANA({ state }, data) {
      return {
        ...state,
        [data.field]: data.value,
      };
    },
  },
  actions: {
  },
};

const form3: Module<{ starSign: string, favouriteBand: string }> = {
  state: {
    starSign: 'test',
    favouriteBand: ''
  },
  mutations: {
    CHANGE_VALUE_BANANA({ state }, data) {
      return {
        ...state,
        [data.field]: data.value,
      };
    },
  },
  actions: {
  },
};

myStore.register('form1', form1);
myStore.register('form2', form2);
myStore.register('form3', form3);

myStore.combine('form2AndForm3', ['form2', 'form3'], (form2, form3) => ({
  form2: form2,
  form3: form3,
}));


myStore.subscribe('form1', (newState) => {
  console.log('Form 1 mutation:', newState);
});
myStore.subscribe('form2', (newState) => {
  console.log('Form2 mutation:', newState);
});

export {
  myStore,
}