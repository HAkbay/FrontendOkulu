import { NavLink } from 'react-router'
import './App.css'
import Router from './routes/Router'

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {/* <li>
          <NavLink to="/parameter/123">Parameter</NavLink>
        </li> */}
        <li>
          <NavLink to="/news/">News</NavLink>
        </li>
        <li>
          <NavLink to="/news/games">Games</NavLink>
        </li>
      </ul>
      <Router />
    </>
  )
}

export default App
