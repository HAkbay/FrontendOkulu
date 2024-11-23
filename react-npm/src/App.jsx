import { useRef } from 'react'
import Portal from "./components/Portal"
import './App.css'
import { useState } from 'react'

function App() {
  const divRef = useRef()
  const [portalTarget, setPortalTarget] = useState(document.body)
  const [textPortal, setTextPortal] = useState("document body")
  const handlePortal = () => {
    setPortalTarget(divRef.current);
    setTextPortal("test div")
    console.log("handle portal has worked", divRef.current.textContent)
  }
  return (
    <>
      <div ref={divRef}>Test</div>
      <button onClick={() => console.log(divRef.current.textContent)}>Click</button>
      <Portal target={portalTarget} text={textPortal} />
      <button onClick={handlePortal}>CLICK ME</button>
    </>
  )
}

export default App
