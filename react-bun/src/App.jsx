import ListItem from './components/ListItem'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import './App.css'

function App() {
  const sentence = ['what', 'a', 'great', 'day', 'to', 'be', 'alive']
  const [value, setValue] = useState(0)
  const Button1 = styled.button`
    background-color: blue;
    color: white;
  `
  useEffect(() => {
    console.log('App rendered')
  }, [])
  useEffect(() => {
    console.log("Button has been pressed")
  }, [value])
  return (
    <>
      <h1>what a great day to be alive</h1>
      <ul>
        {sentence.map((word, index) => (<ListItem key={index} word={word} value={value} />))}
      </ul>
      <button onClick={() => setValue(value + 1)}>Count</button>
      <p>{value}</p>
      <Button1></Button1>
    </>
  )
}

export default App
