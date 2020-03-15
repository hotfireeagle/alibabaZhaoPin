import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { SignComponent } from '../components/sign'

export const show = () => {
  const div: HTMLDivElement = document.createElement('div')
  document.body.appendChild(div)

  ReactDOM.render(<SignComponent />, div)
}