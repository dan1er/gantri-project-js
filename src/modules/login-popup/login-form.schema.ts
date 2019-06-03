import * as yup from 'yup'

const LoginFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .required()
    .email('Invalid email'),
  password: yup
    .string()
    .required()
    .min(6, 'Password must be of at least 6 characters'),
})

export default LoginFormSchema
