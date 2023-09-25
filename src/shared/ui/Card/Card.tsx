import { FC } from 'react'

import { Button } from 'shared/ui/Button/Button'

import { Container } from './styled'

interface CardProps {
    id: number
    title: string
    text: string
    children?: any
}

export const Card: FC<CardProps> = ({id, title, text, children}) => {
    return(
    <Container>
        <h1>{id}</h1>
        <h3>{title}</h3>
        <h4>{text}</h4>
        <Button variant='primary'>Нажми меня</Button>
    </Container>
    )
}