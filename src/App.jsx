import { Outlet } from "react-router-dom"
import Header from "./components/project/Header"

function App() {
  

  return (
    <>
    <header className="container mx-auto">
      <Header></Header>
     
    </header>
    <Outlet></Outlet>
    <footer>
      <h1>chup</h1>
    </footer>
      
    </>
  )
}

export default App
