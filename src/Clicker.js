import React, { useState } from 'react';

export const Clicker = () => {

  const [counter, setCounter] = useState(0);

  
  return (
  <>
      <h1 className='text-center'>Clicker</h1>
      
      <h2 className='text-center'> {counter} </h2>

      <div className="d-grid gap-2 d-md-block ">
          <button class="btn btn-primary"> +1 </button>
          <button class="btn btn-secondary"> +5 </button>
          <button class="btn btn-success"> +10 </button>
          <button class="btn btn-danger"> +20 </button>
          <button class="btn btn-warning"> +25 </button>
          <button class="btn btn-info"> +50 </button>
          <button class="btn btn-dark"> +50 </button>
      </div>

  </>
  );
};
