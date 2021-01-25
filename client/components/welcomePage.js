import React from 'react'
import FormSubSection from './formSubSection'
const CoinGecko = require('coingecko-api')
const axios = require('axios')
import {connect} from 'react-redux'
import {getStockPricesA, getStockPricesB} from '../store/stock'
import './welcomePage.css'
import {getTimeDifference} from '../store/time'
import LoadingView from './loadingView'
class welcomePageDC extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      differenceInDays: 0,
      bitCoinPriceBefore: 0,
      bitCoinPriceAfter: 0,
      today: new Date()
    }
    this.getBitCoinDifference = this.getBitCoinDifference.bind(this)
    this.getDateInDash = this.getDateInDash.bind(this)
    this.getStockPrices = this.getStockPrices.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(newDate) {
    let date2 = new Date()
    let newOne = this.getDateInDash(newDate)
    this.props.getTimeDifference(newDate, date2)
    this.getBitCoinDifference(newDate, date2)
    this.getStockPrices(newDate, date2)
  }
  componentDidMount() {
    const defaultDate = new Date('12/18/2020')
    let date2 = new Date()
    this.props.getTimeDifference(defaultDate, date2)
    this.getBitCoinDifference(defaultDate, date2)
    this.getStockPrices(defaultDate, date2)
  }
  getDateInDash(date) {
    let day = date.getUTCDate()
    let year = date.getUTCFullYear()
    let month = date.getUTCMonth() + 1
    let newOldDay = day + '-' + month + '-' + year
    return newOldDay
  }
  async getStockPrices(date1, date2) {
    let dashedDate1 = this.getDateInDash(date1)
    let stockpriceb = this.props.getStockPricesB(dashedDate1)
    let stockpricea = this.props.getStockPricesA()
    console.log('after', stockpricea, 'before', stockpriceb)
  }
  async getBitCoinDifference(defaultDate, date2) {
    let dateOne = this.getDateInDash(defaultDate)
    let dateTwo = this.getDateInDash(date2)

    const CoinGeckoClient = new CoinGecko()
    let data1 = await CoinGeckoClient.coins.fetchHistory('bitcoin', {
      date: dateOne
    })
    let data2 = await CoinGeckoClient.coins.fetchHistory('bitcoin', {
      date: dateTwo
    })
    let bitCoinB = data1.data.market_data.current_price.usd
    let bitCoinA = data2.data.market_data.current_price.usd
    this.setState({
      bitCoinPriceBefore: Math.round(bitCoinB),
      bitCoinPriceAfter: Math.round(bitCoinA)
    })
  }
  render() {
    if (
      this.state.getStockPricesA == 0 ||
      this.state.bitCoinPriceBefore == 0 ||
      this.state.bitCoinPriceAfter == 0
    ) {
      return <LoadingView />
    }
    return (
      <div className="welcomePageDiv">
        <h1 className="why">Dear Hiring Manager:</h1>
        <p className="text">
          It has been{' '}
          <strong className="bolded">{this.props.difference} </strong>days since
          I graduated from a bootcamp.
        </p>
        <p className="text">
          BitCoin was{' '}
          <strong className="bolded">${this.state.bitCoinPriceBefore}</strong>{' '}
          when I graduated, now it is{' '}
          <strong className="bolded">${this.state.bitCoinPriceAfter}</strong>.
        </p>
        <p className="text">
          Tesla was{' '}
          <strong className="bolded">
            ${Math.round(this.props.stockBefore)}
          </strong>{' '}
          when I graduated, now it is{' '}
          <strong className="bolded">
            ${Math.round(this.props.stockAfter)}
          </strong>.
        </p>
        <p className="text">
          I had <strong className="bolded">$0</strong> in balance, now I have{' '}
          <strong className="bolded">$-19000</strong> in balance.
        </p>
        <p className="text">
          I believe{' '}
          <strong style={{textDecoration: 'line-through'}}>my debt</strong> my
          skills will be of value to your company. Please consider!
        </p>
        <FormSubSection
          getStockPrices={this.getStockPrices}
          getBitCoinDifference={this.getBitCoinDifference}
          today={this.state.today}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapState = state => {
  return {
    stockBefore: state.stock.before,
    stockAfter: state.stock.after,
    difference: state.time.difference
  }
}
const mapDispatch = dispatch => {
  return {
    getStockPricesA: () => dispatch(getStockPricesA()),
    getStockPricesB: date => dispatch(getStockPricesB(date)),
    getTimeDifference: (date1, date2) =>
      dispatch(getTimeDifference(date1, date2))
  }
}

export default connect(mapState, mapDispatch)(welcomePageDC)
