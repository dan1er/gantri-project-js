import * as yup from 'yup'

const StoryFormSchema = yup.object().shape({
  title: yup.string().required(),
})

export default StoryFormSchema
