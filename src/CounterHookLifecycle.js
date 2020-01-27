import React, { useState, useEffect } from 'react'

export default function CounterHookLifecycle() {

    const [counter, setCounter] = useState(0)

    // const [name, setName] = useState("Nic")

    //? componentDidMount & componentDidUpdate:
    useEffect(()=>{
        document.title = `You clicked ${counter} times`
    }, [counter])

    return (
        <div>
            <h2>CounterHookLifecycle</h2>
            <p>Your counter is {counter}</p>
            <button
            onClick={() => setCounter(prevState => prevState + 1)}
            >Increment (+1)</button>
            {/* <p>Name: {name}</p>
            <button onClick={()=> setName("Marco")}>Change name</button> */}
        </div>
    )
}
