import React, { memo, ReactChild } from 'react'
import {
  CardActions,
  CardContainer,
  CardContent,
  CardFooter,
  CardImage,
  CardTitle,
  CardUserInfo,
  CardUserName,
} from './card.styles'

export interface CardProps {
  title: string
  username: string
  actions: ReactChild
}

export const Card = memo((props: CardProps) => (
  <CardContainer>
    <CardActions>{props.actions}</CardActions>
    <CardContent />
    <CardFooter>
      <CardTitle>{props.title}</CardTitle>
      <CardUserInfo>
        <CardImage />
        <CardUserName>{props.username}</CardUserName>
      </CardUserInfo>
    </CardFooter>
  </CardContainer>
))
