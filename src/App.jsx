import { Route, Routes } from "react-router-dom"
import Main from "./views/Main.jsx"
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
