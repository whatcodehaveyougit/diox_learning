import React, {useState, useEffect} from 'react';
import './App.css';
import Store, { Module } from 'diox';
const store = new Store();


const exampleForm: Module<{ name: string; }> = {
  state: {
    name: 'testing',
  },
  mutations: {
    CHANGE_VALUE({ state }, data) {
      return {
        ...state,
        [data.field]: data.value,
      };
    },
  },
  actions: {
  },
};

store.register('exampleForm', exampleForm);

store.subscribe('exampleForm', (newState) => {
  console.log('New mutation ! ', newState);
});

function App() {

  const [name, setName] = useState<any>();

  useEffect(() => {
    store.subscribe('exampleForm', (newState) => {
      setName(newState)
    })
  }, [])

  return (
    <div className="App">
      {/* <div>{state}</div> */}
      <div>
        <label>Name: </label>
        <input onChange={(e) => {
          store.mutate('exampleForm', 'CHANGE_VALUE', { field: 'name', value: e.target.value });
        }} />
      </div>

    </div>
  );
}

export default App;
