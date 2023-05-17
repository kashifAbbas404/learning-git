
import { Link } from "react-router-dom"
const SideBar = () => {
  return (
    <div className="bg-gray-200 sm:h-[100vh]  sm:w-[20%] flex flex-col items-center">
       
       <div className="w-20 h-20 mt-10 ">
        <img className="h-[100%] w-[100%] object-cover rounded-[50%]" src="./logo.jpg" alt="" />
        </div> 

       <h2 className="mt-4  font-bold uppercase  text-2xl text-center
        md:text-lg sm:text-sm text-serif"> 
     Kashif Abbas</h2>
       <p className="text-center"> 
       <span className="text-blue-400">UI/FrontEnd</span>  Developer</p>


       <div className="my-4 text-xs   flex
       text-center  font-bold sm:flex-col sm:space-y-4 sm:mt-16 
       sm:text-lg  sm:flex ">
        <Link className="mwnuItemFocus" to="/">Home</Link>
         <Link className="mwnuItemFocus" to="/about"> About</Link>
        <Link className="mwnuItemFocus" to="/skills">Skills</Link>
        <Link className="mwnuItemFocus" href="#">Work</Link>
        <Link className="mwnuItemFocus" to="/contact">Contact</Link>
       </div>
       <div className="mt-[3rem]">&#169; 2023 Kashi.</div>
    </div>
  )
}

export default SideBar