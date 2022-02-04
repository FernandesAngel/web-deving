import { ButtonHTMLAttributes } from 'react'

export interface MenuTopicProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  topics: string[]
}
