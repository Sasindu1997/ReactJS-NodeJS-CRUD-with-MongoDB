import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../components/navBar/NavBar'

it('render search button', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Button></Button>, div)
})
