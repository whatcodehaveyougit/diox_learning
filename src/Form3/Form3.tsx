import React from 'react';
import useStore from 'diox/connectors/react';
import { myStore } from '../store/store';
import '../App.css'


function Form3() {

  const useCombiner = useStore(myStore);
  const state = useCombiner<any>('form2AndForm3');


  return (
    <div className='form-wrapper'>
      {/* <b>Second Part of the form: {firstName}</b> */}
      <div>My star sign is: {state.form3.starSign}</div>

      <div>
        <label>Star Sign: </label>
        <input type="text" onChange={(e) => {
          myStore.mutate('form3', 'CHANGE_VALUE_BANANA', { field: 'starSign', value: e.target.value });
        }} />
      </div>
      <div>
        <label>Favourite Band: </label>
        <input type="text" onChange={(e) => {
          myStore.mutate('form3', 'CHANGE_VALUE_BANANA', { field: 'favouriteBand', value: e.target.value });
        }} />
      </div>
    </div>
  );
}

export default Form3;