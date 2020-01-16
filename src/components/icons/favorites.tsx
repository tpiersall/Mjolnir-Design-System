import React, { FC } from 'react'
import { Icon } from './icon'

export const Favorites: FC = (props) => {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
           <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="99.089%" id="a">
            <stop stop-color="#6EDCFF" offset="0%"/>
            <stop stop-color="#79E2CD" offset="100%"/>
            </linearGradient>
         </defs>
        <path d="M10.116 0a1 1 0 01.916 1.402l-1.978 4.51a1 1 0 00.915 1.402h.841a1 1 0 01.835 1.55l-5.117 7.764a1 1 0 01-1.83-.456L4.34 12.4a1 1 0 00-.996-.906H1.53a1 1 0 01-.915-1.401L4.778.598A1 1 0 015.694 0h4.422zM9.35 1.499H6.021L2.295 9.994h1.05a2.5 2.5 0 012.468 2.1l.021.165.223 2.357L9.883 8.81l-.12-.005a2.5 2.5 0 01-.605-.127l-.193-.075A2.5 2.5 0 017.616 5.47l.064-.16L9.35 1.5z" transform="translate(6 3)" fill="url(#a)" fillRule="nonzero"/>
        </Icon>
    )
}
