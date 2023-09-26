import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { postApi } from 'api/index'

import { Button } from 'shared/ui/Button/Button'

import { Container, Head, Text } from './styled'

interface PostProps {
    id: number
    title: string
    body: string

    children?: any
}

export const RowCard: FC<PostProps> = ({id, title, body, children }) => {
    // вот тут, конечно, плохо, что навигейт в юайке. Как реализовать? По идее, должна быть в листе функция навигейта.
    const navigate = useNavigate()
    const redirectTo = () => navigate(`/${id}`)
    return (
        <Container>
            <Head>{id} - {title}</Head>
            <Text>{body}</Text>
            <Button variant='primary' onClick={redirectTo} >
                Просмотр
            </Button>
        </Container>
    )
}