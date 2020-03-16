import * as React from 'react'
import './index.scss'
import { hide } from '../../services/loginService'

export const SignComponent: React.FC<any> = () => {

  const hideSign = () => hide()

  return (
    <div className='mask' onClick={hideSign}>
      
    </div>
  )
}