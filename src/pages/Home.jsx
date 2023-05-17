import { Link } from "react-router-dom"


const Home = () => {
  return (

    <div className="sm:absolute sm:top-0 sm:left-[20%] sm:flex sm:flex-row-reverse" >
         
 
   <div className=" mt-4 h-[30vh] flex items-center justify-end 
      sm:w-[50%]  sm:h-[90vh] sm:justify-end sm:ml-4 ">
    <img className="h-[100%] w-[100%] object-contain" src="./home.jpg" alt="" />
   </div>
   <div className=" h-[20vh] mt-6  sm:flex sm:justify-center
    sm:w[50%] sm:h-[90vh] sm:items-center sm:ml-4">
    <div className="flex flex-col justify-center items-center">
    <h1 className="text-2xl font-bold sm:text-6xl">I Am</h1>
    <h1  className="text-4xl sm:text-4xl font-bold ">A <span className="text-blue-400">Developer</span> </h1>
    <Link to='/contact' className="bg-blue-500 rounded-md px-2 mt-4 hover:bg-blue-600 ">
        Contact Me</Link></div>
   </div>
    </div>
  )
}

export default Home