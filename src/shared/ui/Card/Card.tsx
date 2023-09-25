import { FC } from 'react'

import { Button } from 'shared/ui/Button/Button'

interface CardProps {
    description: string
    children?: any
}

export const Card: FC<CardProps> = ({description, children}) => {
    return(
    <div>
        <h1>{description}</h1>
        {children}
        <Button variant='primary'>Нажми меня</Button>
    </div>
    )
}