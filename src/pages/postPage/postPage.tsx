import { FC } from 'react'

import { Card } from 'shared/ui/Card/Card'

interface PostPageProps {
    id: number,
    title: string
    body: string
    userId: number
}

export const PostPage: FC<PostPageProps> = () => {
    return (
        <Card description='post'>
            <div>i'm an id! </div>
            <div>and i'm a description!</div>
        </Card>
    )
}