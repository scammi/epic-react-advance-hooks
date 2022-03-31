// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CountContext = React.createContext() 
const CounterProvider = ({children}) => {

  const [count, setCount] = React.useState(0)

  return(
    <CountContext.Provider value={[count, setCount]}>
      {children}
    </CountContext.Provider>
  )
  
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  // const foo = React.useContext(FooContext)
  const contextValue = React.useContext(CountContext) 
  
  const count = contextValue[0]

  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const contextValue = React.useContext(CountContext) 
  const setCount = contextValue[1]
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CounterProvider>
        <CountDisplay />
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
