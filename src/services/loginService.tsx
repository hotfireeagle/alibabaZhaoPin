import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { SignComponent } from '../components/sign'

export const show = () => {
  const div: HTMLDivElement = document.createElement('div')
  div.id = 'signComponentWrapper'
  document.body.appendChild(div)

  ReactDOM.render(<SignComponent />, div)
}

export const hide = () => {
  const div: HTMLElement | null = document.getElementById('signComponentWrapper')
  div && document.body.removeChild(div)
}