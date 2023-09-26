import { FC } from 'react'

import { Button } from 'shared/ui/Button/Button'

import { Container, Head, Text } from './styled'

interface PostProps {
  id: number
  title: string
  body: string
  children?: any
  navigateTo?: () => void
  style?: any
}

export const RowCard: FC<PostProps> = ({
  id,
  title,
  body,
  children,
  navigateTo = () => {},
  style,
}) => {
  return (
    <Container style={style}>
      <Head>
        {id} - {title}
      </Head>
      <Text>{body}</Text>
      <Button variant="primary" onClick={navigateTo}>
        Просмотр
      </Button>
    </Container>
  )
}
