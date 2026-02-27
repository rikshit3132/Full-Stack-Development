import React from 'react'
import Counter from './Counter/Counter'

const CounterApp = () => {
    let count = 10;
  return (
    <div>
        <Counter count = {count}/>
    </div>
  )
}

export default CounterApp