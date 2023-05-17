import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div
      className="sm:absolute sm:top-0 sm:left-[25%] sm:h-[90vh] 
    sm:w-[70vw] sm:flex sm:items-center sm:justify-center]"
    >
      <div className="hidden sm:flex sm:w-[50%] sm:h-[70%]  sm:p-4">
        <img className="h-[100%] w-[100%] object-cover shadow-lg" src="./about.jpg" alt="" />
      </div>
      <div className="flex flex-col mt-[4rem] p-8 items-center justify-center sm:w-[50%] sm:h-[70%]  sm:m-4 sm:p-4 sm:flex shadow-lg
      sm:flex-col sm:items-center sm:justify:center">
        <h1 className=" text-xl font-bold m-4 ">About ME</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          delectus nemo facere in rerum expedita. Rem temporibus repudiandae eos
          pariatur minus impedit, saepe nam totam provident et molestiae iste
          reprehenderit?
        </p>
        <Link to ='/contact' className="bg-blue-500 text-center rounded-md px-2 mt-4 hover:bg-blue-600 ">Contact Me</Link>
      </div>
    </div>
  );
};

export default AboutMe;
