import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_TSLAA = 'GET_TSLAA'
const GET_TSLAB = 'GET_TSLAB'
const GET_GMEA = 'GET_GMEA'
const GET_GMEB = 'GET_GMEB'
/**
 * INITIAL STATE
 */
const defaultStock = {tslaA: 0, tslaB: 0, gmeA: 0, gmeB: 0}

/**
 * ACTION CREATORS
 */
const getTSLAB = stockPrice => ({type: GET_TSLAB, stockPrice})
const getTSLAA = stockPrice => ({type: GET_TSLAA, stockPrice})
const getGMEB = stockPrice => ({type: GET_GMEB, stockPrice})
const getGMEA = stockPrice => ({type: GET_GMEA, stockPrice})
/**
 * THUNK CREATORS
 */
export const getStockPricesA = () => async dispatch => {
  try {
    let res1 = await axios.get('/api/yahoostockprices/after/TSLA')
    dispatch(getTSLAA(res1.data))

    let res2 = await axios.get('/api/yahoostockprices/after/GME')
    dispatch(getGMEA(res2.data))
  } catch (err) {
    console.error(err)
  }
}
export const getStockPricesB = date => async dispatch => {
  try {
    let res1 = await axios.post('/api/yahoostockprices/before/TSLA', {
      date: date
    })
    dispatch(getTSLAB(res1.data[0].close))

    let res2 = await axios.post('/api/yahoostockprices/before/GME', {
      date: date
    })
    dispatch(getGMEB(res2.data[0].close))
  } catch (err) {
    console.error(err)
  }
}
/**
 * REDUCER
 */
export default function(state = defaultStock, action) {
  switch (action.type) {
    case GET_TSLAA:
      return {...state, tslaA: action.stockPrice}
    case GET_TSLAB:
      return {...state, tslaB: action.stockPrice}
    case GET_GMEA:
      return {...state, gmeA: action.stockPrice}
    case GET_GMEB:
      return {...state, gmeB: action.stockPrice}
    default:
      return state
  }
}
