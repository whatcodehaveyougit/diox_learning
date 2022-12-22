import React, {useState, useEffect} from 'react';
import './App.css';
import { myStore } from './store';

function App() {

  const [firstName, setFirstName] = useState<string>();

  useEffect(() => {
    myStore.subscribe('exampleForm', (newState: any) => {
      // Whenever there is a change to myStore, this will get updated
      setFirstName(newState.firstName)
    })
  }, [])

  return (
    <div className="App">

      <b>My name is: {firstName}</b>
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
