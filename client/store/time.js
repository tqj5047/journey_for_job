import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
// const GET_TIME = 'GET_TIME'
const GET_DIFFERENCE = 'GET_DIFFERENCE'
/**
 * INITIAL STATE
 */
const defaultTime = {
  before: new Date('12/18/2020'),
  after: new Date(),
  difference: 0
}

/**
 * ACTION CREATORS
 */
// const getTime = (time) => ({ type: GET_TIME, time })
const getDifference = diff => ({type: GET_DIFFERENCE, diff})
export const getTimeDifference = (date1, date2) => dispatch => {
  try {
    let differenceInTime = date2 - date1.getTime()
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24))
    dispatch(getDifference(differenceInDays))
  } catch (err) {
    console.error(err)
  }
}
/**
 * REDUCER
 */
export default function(state = defaultTime, action) {
  switch (action.type) {
    case GET_DIFFERENCE:
      return {...state, difference: action.diff}
    default:
      return state
  }
}
