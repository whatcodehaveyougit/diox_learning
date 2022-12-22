import React, {useState, useEffect} from 'react';
import { myStore } from '../store/store';
import '../App.css'

function Form2() {

  return (
    <div className='form-wrapper'>
      {/* <b>Second Part of the form: {firstName}</b> */}
      <div>
        <label>Occupation: </label>
        <input type="text" onChange={(e) => {
          myStore.mutate('form2', 'CHANGE_VALUE_BANANA', { field: 'occupation', value: e.target.value });
        }} />
      </div>
      <div>
        <label>Favourite Color: </label>
        <input type="text" onChange={(e) => {
          myStore.mutate('form2', 'CHANGE_VALUE_BANANA', { field: 'favouriteColor', value: e.target.value });
        }} />
      </div>
    </div>
  );
}

export default Form2;