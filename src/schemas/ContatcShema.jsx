import * as Yup from 'yup'

const ContactShema = Yup.object({
    name :Yup.string().min(4).max(25).required('required'),
    email :Yup.string().email().required('required'),
    phone :Yup.string().optional('optional'),
    text :Yup.string().min(10).required('required'),
})
export default ContactShema