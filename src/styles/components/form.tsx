import { Field, Form } from 'formik'
import styled, { css } from 'styled-components'
import { media } from '../media'
import { transparentize } from '../mixings'
import { Button } from './button'

export const FormInput = styled.input<{ invalid?: boolean }>`
  ${({ theme, invalid }) => css`
    display: block;
    width: 100%;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    background-color: ${theme.colors.white};
    transition: all 0.3s;
    border: 1px solid ${transparentize(theme.colors.grey, 0.4)};

    &:focus {
      outline: none;
    }

    ${invalid &&
      css`
        background-color: ${theme.colors.lightPink};
      `}

    &::-webkit-input-placeholder {
      color: ${theme.colors.grey};
    }

    ${media.lessThan('sm')`width: 95%`}

    ${media.lessThan('xs')`width: 100%`}
  `}
`

export const FormAreaInput = styled.textarea<{ invalid?: boolean }>`
  ${({ theme, invalid }) => css`
    display: block;
    width: 100%;
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    background-color: ${theme.colors.white};
    transition: all 0.3s;
    border: 1px solid ${transparentize(theme.colors.grey, 0.4)};
    resize: vertical;

    &:focus {
      outline: none;
    }

    ${invalid &&
      css`
        background-color: ${theme.colors.lightPink};
      `}

    &::-webkit-input-placeholder {
      color: ${theme.colors.grey};
    }

    ${media.lessThan('sm')`width: 95%`}

    ${media.lessThan('xs')`width: 100%`}
  `}
`

export const FormGroup = styled.div`
  line-height: 0;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${Button} {
    width: 100%;
  }
`

export const FormContainer = styled(Form)`
  text-align: center;
`
