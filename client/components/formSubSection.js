import React, {useState} from 'react'
import DatePicker from 'react-date-picker'
import {connect} from 'react-redux'
import {getStockPricesA, getStockPricesB} from '../store/stock'
import {getTimeDifference} from '../store/time'
import './formSubSection.css'
function FormSubSectionDC(props) {
  const [value, onChange] = useState(new Date())
  return (
    <div className="form">
      <h4>Interested in your stats?</h4>
      <h5>Choose your graduation date:</h5>
      <DatePicker onChange={onChange} value={value} />
      <button
        onClick={() => {
          props.onSubmit(value)
        }}
      >
        Submit
      </button>
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    getStockPricesA: () => dispatch(getStockPricesA()),
    getStockPricesB: date => dispatch(getStockPricesB(date)),
    getTimeDifference: (date1, date2) =>
      dispatch(getTimeDifference(date1, date2))
  }
}

export default connect(null, mapDispatch)(FormSubSectionDC)
