import React, {useState} from 'react';

export const useButton = (initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState);

    const increment1 = () => {
        console.log("Boton 1 ")
        setCounter(counter + 1)
    }

    const increment = ( factor = 1 ) => {

        console.log(`Boton ${factor}`)
        setCounter(counter + factor);
    }

    

    
    return{
        counter,
        increment,
        increment1,
    }
};
