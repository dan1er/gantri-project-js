import { Formik, FormikActions } from 'formik'
import React from 'react'
import { useStoryDispatch } from '../../context/stories-context'
import { useLoggedUsername } from '../../hooks/auth'
import {
  Button,
  FormAreaInput,
  FormContainer,
  FormGroup,
  PopupActions,
  PopupCloseButton,
  PopupContainer,
  PopupContent,
  PopupTitleBox,
} from '../../styles/components'
import { HeadingSecondary } from '../../styles/typography'
import StoryFormSchema from './story-form.schema'

interface Values {
  title: string
  description?: string
}

export const StoryPopup = () => {
  const username = useLoggedUsername()
  const dispatch = useStoryDispatch()

  const toggleModal = () => dispatch({ type: 'TOGGLE_STORY_POPUP' })

  const submitForm = (
    values: Values,
    { setSubmitting }: FormikActions<Values>
  ) => {
    dispatch({
      type: 'ADD_STORY',
      story: { ...values, username },
    })
    setSubmitting(false)
    toggleModal()
  }

  return (
    <PopupContainer>
      <PopupContent>
        <Formik
          initialValues={{
            title: '',
            description: '',
          }}
          validationSchema={StoryFormSchema}
          onSubmit={submitForm}
          render={({ isSubmitting, values, errors, handleChange }) => (
            <FormContainer>
              <PopupTitleBox>
                <HeadingSecondary>Add Story</HeadingSecondary>

                <PopupCloseButton onClick={toggleModal}>
                  &times;
                </PopupCloseButton>
              </PopupTitleBox>

              <FormGroup>
                <FormAreaInput
                  placeholder="Title"
                  id="title"
                  name="title"
                  rows={2}
                  value={values.title}
                  onChange={handleChange}
                  invalid={!!errors.title}
                />
              </FormGroup>

              <FormGroup>
                <FormAreaInput
                  placeholder="Description"
                  id="description"
                  name="description"
                  rows={4}
                  value={values.description}
                  onChange={handleChange}
                  invalid={!!errors.description}
                />
              </FormGroup>

              <PopupActions>
                <Button as="button" type="submit" disabled={isSubmitting}>
                  Add
                </Button>
                <Button as="button" secondary onClick={toggleModal}>
                  Cancel
                </Button>
              </PopupActions>
            </FormContainer>
          )}
        />
      </PopupContent>
    </PopupContainer>
  )
}
