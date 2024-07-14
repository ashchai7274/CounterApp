import { useState } from 'react';
import '../component/counter.css'

const Counter = () => {
    let [count,setCount] = useState(0)
    
    let incre = ()=>{
        setCount(count + 1)
    }

    let decre = ()=>{
        setCount(count - 1)
    }
    let reset = ()=>{
        setCount(0)
    }
    return ( 
        <div className="count">
         <h1>Counter App</h1>

        <div className="head">
        <h1>{count}</h1>
        </div>
         <button onClick={incre}> +  </button>
         <button onClick={decre}> -  </button>
         <button onClick={reset}> Reset </button>


        </div>
     );
}
 
export default Counter;