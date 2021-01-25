import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import arrowImg from '../../assets/arrow.png'
import { Button, Input, Value } from './styles'

function Converter({ converterFunc, convertFrom, convertTo }) {
  const [currentValue, setCurrentValue] = useState(null);
  const [result, setResult] = useState(null);

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setCurrentValue(e.target.value);
    setResult(null);
  }

  const initialState = () => {
    setCurrentValue(null);
    setResult(null);
    inputRef.current.value = null;
  }

  return (
    <div className="toRoman">
      <div className="subTitle">
        {convertFrom} <img src={arrowImg} alt='Arrow' title='Arrow' className='arrow' /> {convertTo}
      </div>
      <Input onChange={handleChange} ref={inputRef} />
      <Button onClick={() => setResult(converterFunc(convertFrom === 'Roman' ? currentValue?.toUpperCase() : currentValue))}>
        Submit
      </Button>
      {result && <>
        <Value>{result}</Value>
        <div className='clear'>
          <Button onClick={initialState} color='darkred'>
            Clear
          </Button>
        </div>
      </>}
    </div>
  )
}

Converter.propTypes = {
  converterFunc: PropTypes.func.isRequired,
  convertFrom: PropTypes.string.isRequired,
  convertTo: PropTypes.string.isRequired,
}

export default Converter
