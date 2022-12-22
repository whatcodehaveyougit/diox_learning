import React, {useState, useEffect} from 'react';
import './App.css';
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

function App() {

  // const [name, setName] = useState<any>();

  // useEffect(() => {
  //   store.subscribe('exampleForm', (newState) => {
  //     setName(newState)
  //   })
  // }, [])

  return (
    <div className="App">
      <div>{JSON.stringify(myStore)}</div>
      {/* <div>{myStore.modules.exampleForm.state.firstName}</div> */}

      <div>
        <label>First Name: </label>
        <input type="text" onChange={(e) => {
          myStore.mutate('exampleForm', 'CHANGE_VALUE_BANANA', { field: 'firstName', value: e.target.value });
        }} />
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" onChange={(e) => {
          myStore.mutate('exampleForm', 'CHANGE_VALUE_BANANA', { field: 'lastName', value: e.target.value });
        }} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" onChange={(e) => {
          myStore.mutate('exampleForm', 'CHANGE_VALUE_SIMPLE_STATE', { value: e.target.value });
        }} />
      </div>
    </div>
  );
}

export default App;
