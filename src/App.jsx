import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"


function App() {

  return (
    <div>
      <div className="App">
        <NavBar/>
        <div className="main_container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
