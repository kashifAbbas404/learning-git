import SideBar from "./components/SideBar"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"

const App = () => {
  return (
 <BrowserRouter>

 <SideBar/>
 <Routes>
<Route path="/" element = {<Home/>}/>
<Route path = '/about' element = {<AboutMe/>}/>
<Route path = '/skills' element = {<Skills/>}/>
<Route path = '/contact' element = {<Contact/>}/>
 </Routes>

 </BrowserRouter>
  )
}

export default App