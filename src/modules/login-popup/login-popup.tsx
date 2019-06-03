import { Formik, FormikActions } from 'formik'
import React from 'react'
import { useAuthDispatch } from '../../context/auth-context'
import {
  Button,
  FormContainer,
  FormGroup,
  FormInput,
  PopupCloseButton,
  PopupContainer,
  PopupContent,
  PopupTitleBox,
} from '../../styles/components'
import { HeadingSecondary } from '../../styles/typography'
import LoginFormSchema from './login-form.schema'

interface Values {
  name: string
  email: string
  password: string
}

export const LoginPopup = () => {
  const dispatch = useAuthDispatch()

  const toggleModal = () => dispatch({ type: 'TOGGLE_LOGIN_MODAL' })

  const onSubmit = (
    values: Values,
    { setSubmitting }: FormikActions<Values>
  ) => {
    dispatch({ type: 'SIGN_UP', userInfo: values })
    setSubmitting(false)
  }

  return (
    <PopupContainer>
      <PopupContent>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={LoginFormSchema}
          onSubmit={onSubmit}
          render={({ isSubmitting, values, errors, handleChange }) => (
            <FormContainer>
              <PopupTitleBox>
                <HeadingSecondary>Sign up</HeadingSecondary>

                <PopupCloseButton onClick={toggleModal}>
                  &times;
                </PopupCloseButton>
              </PopupTitleBox>

              <FormGroup>
                <FormInput
                  type="name"
                  placeholder="Name"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  invalid={!!errors.name}
                />
              </FormGroup>

              <FormGroup>
                <FormInput
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  invalid={!!errors.email}
                />
              </FormGroup>

              <FormGroup>
                <FormInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  invalid={!!errors.password}
                />
              </FormGroup>

              <FormGroup>
                <Button as="button" type="submit" disabled={isSubmitting}>
                  Sign up
                </Button>
              </FormGroup>
            </FormContainer>
          )}
        />
      </PopupContent>
    </PopupContainer>
  )
}
