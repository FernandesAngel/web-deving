import { ButtonHTMLAttributes } from 'react'

export interface MenuTopicProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  topic: string
}
