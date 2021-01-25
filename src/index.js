import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './styles'
import Converter from './components/Converter'
import { Title } from './components/Converter/styles'
import { convertToRoman, convertFromRoman } from './utils/helpers'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Title>Roman <span className="red">Numerals</span></Title>
    <div className="contentWrapper">
      <Converter converterFunc={convertToRoman} convertFrom="Year" convertTo="Roman" />
      <Converter converterFunc={convertFromRoman} convertFrom="Roman" convertTo="Year" />
    </div>
  </React.Fragment>,
  document.getElementById('root')
)
