import { useFormik } from "formik"
import ContactShema from '../schemas/ContatcShema'
const initialValues = {
  name : '',
  email : '',
  phone : '',
  text : ''
}
const Contact = () => {
  const {values,errors,handleChange,handleSubmit} = useFormik({
    initialValues,
    validationSchema : ContactShema,
    onSubmit : ()=>{
      console.log(values)
    }

  })
  return (
    <div  className="sm:absolute sm:top-0 ml-[20%] h-[100vh] flex items-center
     justify-center flex-col sm:w-[70%] ">
      <h1 className="mb-8  font-bold text-2xl">Contact Me</h1>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <label className="my-2" htmlFor="email" >Email</label>
       <input type="text" name="email"
        value={values.email}
        onChange={handleChange}
        className="rounded-md px-2 bg-gray-200" />
        <p className="text-red-600 text-sm">{errors.email}</p>
        <label className="my-2"  htmlFor="name" >Name</label>
       <input type="text" name="name" 
          value={values.name}
        onChange={handleChange}
       className="rounded-md px-2 bg-gray-200" />
       <p className="text-red-600 text-sm">{errors.name}</p>
        <label className="my-2"  htmlFor="phone" >Phone</label>
       <input type="text" name="phone" 
          value={values.phone}
        onChange={handleChange}
       className="rounded-md px-2 bg-gray-200" />
       <p className="text-red-600 text-sm">{errors.phone}</p>
        <label  className="my-2" htmlFor="text" >Text</label>
       <textarea name="text" 
          value={values.text}
        onChange={handleChange}
       className="bg-gray-200 rounded-md px-2 "  placeholder="Enter some text"/>
       <p className="text-red-600 text-sm">{errors.text}</p>
          <button className="bg-blue-500  px-2  mt-4 w-20 rounded-md hover:bg-blue-400 ">Submit</button>
      </form>


    </div>
  )
}

export default Contact