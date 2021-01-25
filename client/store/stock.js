import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_STOCKA = 'GET_STOCKA'
const GET_STOCKB = 'GET_STOCKB'
/**
 * INITIAL STATE
 */
const defaultStock = {before: 0, after: 0}

/**
 * ACTION CREATORS
 */
const getStockB = stockPrice => ({type: GET_STOCKB, stockPrice})
const getStockA = stockPrice => ({type: GET_STOCKA, stockPrice})

/**
 * THUNK CREATORS
 */
export const getStockPricesA = () => async dispatch => {
  try {
    const res = await axios.get('/api/yahoostockprices/after')
    console.log('in stock in store what is res B', res.data)
    dispatch(getStockA(res.data))
  } catch (err) {
    console.error(err)
  }
}
export const getStockPricesB = date => async dispatch => {
  try {
    const res = await axios.post('/api/yahoostockprices/before', {date: date})
    console.log('in stock in store what is res A', res.data[0].close)
    dispatch(getStockB(res.data[0].close))
  } catch (err) {
    console.error(err)
  }
}
/**
 * REDUCER
 */
export default function(state = defaultStock, action) {
  switch (action.type) {
    case GET_STOCKA:
      return {...state, after: action.stockPrice}
    case GET_STOCKB:
      return {...state, before: action.stockPrice}
    default:
      return state
  }
}
