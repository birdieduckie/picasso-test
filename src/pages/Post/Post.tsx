import { FC } from 'react'

import { Card } from 'shared/ui/Card/Card'

interface PostProps {
    id: number,
    title: string
    body: string
}

export const Post: FC<PostProps> = ({ id, title, body}) => {
    return (
        <Card id={id} text={body} title={title} />
    )
}