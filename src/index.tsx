import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MainNavigator from './controller/MainNavigator'

const root = document.getElementById('root')
if (root) {
  ReactDOM.render(
    <BrowserRouter>
      <MainNavigator />
    </BrowserRouter>,
    root,
  )
}