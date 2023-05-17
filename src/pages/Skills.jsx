import {FaPaintBrush} from 'react-icons/fa'
import {BsCodeSlash,BsFiletypeCss} from 'react-icons/bs'
const Skills = () => {
  return (
    <div
    className="sm:absolute sm:top-0 sm:left-[25%] sm:h-[90vh] 
  sm:w-[70vw] sm:flex sm:items-center sm:justify-center]">

 {/* dicription section   */}
    <div className=" sm:w-[50%] mt-16 sm:h-[70%] overflow-y-scroll shadow-lg flex flex-col space-y-16 p-4 ">
       
<div className='flex'>
      <div className='w-[30%]   mr-2 flex justify-center items-center border text-4xl'>
        <FaPaintBrush/>
      </div>
      <div>
        <h1 className='font-bold w-[70%] text-blue-600 '>Design + Development</h1>
        Lorem ipsum dolor sitst veniam ullam?
        Lorem ipsum dolor sitst veniam ullam?
      </div>
      </div>

<div className='flex'>
      <div className='w-[30%]  mr-2 flex justify-center items-center border text-4xl'>
        <BsCodeSlash/>
      </div>
      <div>
        <h1 className='font-bold w-[70%] text-blue-600'>Technology</h1>
        Lorem ipsum dolor sitst veniam ullam?
        Lorem ipsum dolor sitst veniam ullam?
      </div>
      </div>

<div className='flex'>
      <div className='w-[30%]  mr-2 flex justify-center items-center border text-4xl'>
        <BsFiletypeCss/>
      </div>
      <div>
        <h1 className='font-bold w-[70%] text-blue-600'>Always Responsive</h1>
        Lorem ipsum dolor sitst veniam ullam?
        Lorem ipsum dolor sitst veniam ullam?
      </div>
      </div>



    </div>

{/* skills section  */}
    <div className=" sm:w-[50%] sm:h-[70%] space-y-8  m-4 py-16 px-4 shadow-lg">
<h1 className='text-2xl text-center'>My SKills</h1>
     
     <div className='bg-orange-400 '>
        <div className='bg-orange-600 w-[90%] px-4 flex justify-between'>
        <p>html</p>
        <p>90</p> 
        </div>
     </div> 

     
     <div className='bg-blue-600 '>
        <div className='bg-blue-800 w-[98%] px-4 flex justify-between'>
        <p>CSS</p>
        <p>98</p> 
        </div>
     </div> 

     
     <div className='bg-yellow-400 '>
        <div className='bg-yellow-600 w-[80%] px-4 flex justify-between'>
        <p>JS</p>
        <p>80</p> 
        </div>
     </div> 

     
     <div className='bg-blue-300 '>
        <div className='bg-blue-400 w-[90%] px-4 flex justify-between'>
        <p>React</p>
        <p>90</p> 
        </div>
     </div> 

     
     <div className='bg-blue-100 '>
        <div className='bg-blue-200 w-[70%] px-4 flex justify-between'>
        <p>Tailwind</p>
        <p>70</p> 
        </div>
     </div> 

     
    

     
      </div>
   
  </div>
  )
}

export default Skills