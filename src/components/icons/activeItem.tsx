import React, { FC } from 'react'
import { Icon } from './icon'

export const ActiveItemIcon: FC = (props) => {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
          <defs>
    <linearGradient x1="50%" y1="0%" x2="50%" y2="99.089%" id="a">
      <stop stop-color="#6EDCFF" offset="0%"/>
      <stop stop-color="#79E2CD" offset="100%"/>
    </linearGradient>
  </defs>
  <path d="M7.998 13.241a.95.95 0 01.038-.029c1.873-1.344 3.404-2.634 4.682-3.944.955-.978 1.587-1.767 2.072-2.686.317-.6.471-1.075.46-1.568-.035-1.433-.588-2.59-1.664-3.483h0a3.42 3.42 0 00-2.183-.777c-.933 0-1.836.374-2.473 1.02a3.562 3.562 0 00-.326.381l-.6.81-.603-.807C6.608 1.098 5.297.571 4.014.805c-1.093.2-1.937.793-2.546 1.798C.591 4.052.523 5.377 1.235 6.64c.424.753.978 1.492 1.698 2.26 1.354 1.448 2.963 2.828 5.065 4.34z" transform="translate(4 5)" stroke="url(#a)" stroke-width="1.5" fill="none" fill-rule="evenodd"/>
    </Icon>
    )
}


