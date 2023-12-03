import { PropsWithChildren, FC } from 'react'

export const Header:FC<PropsWithChildren> = ({children}) => {
  return (
    <header>
      {children}
    </header>
  )
}