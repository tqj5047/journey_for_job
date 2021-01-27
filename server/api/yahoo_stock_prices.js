const yahooStockPrices = require('yahoo-stock-prices')
const router = require('express').Router()
module.exports = router

router.get('/after/TSLA', async (req, res, next) => {
  try {
    const price = await yahooStockPrices.getCurrentPrice('TSLA')
    res.json(price)
  } catch (err) {
    next(err)
  }
})
router.get('/after/GME', async (req, res, next) => {
  try {
    const price = await yahooStockPrices.getCurrentPrice('GME')
    res.json(price)
  } catch (err) {
    next(err)
  }
})
router.post('/before/TSLA', async (req, res, next) => {
  try {
    console.dir(req.body.date)
    let [day, month, year] = req.body.date.split('-')
    month = month - 1
    console.log(day, month, year)
    const price = await yahooStockPrices.getHistoricalPrices(
      month,
      day,
      year,
      month,
      day + 1,
      year,
      'TSLA',
      '1d'
    )
    res.json(price.slice(price.length - 1))
  } catch (err) {
    next(err)
  }
})
router.post('/before/GME', async (req, res, next) => {
  try {
    console.dir(req.body.date)
    let [day, month, year] = req.body.date.split('-')
    month = month - 1
    console.log(day, month, year)
    const price = await yahooStockPrices.getHistoricalPrices(
      month,
      day,
      year,
      month,
      day + 1,
      year,
      'GME',
      '1d'
    )
    res.json(price.slice(price.length - 1))
  } catch (err) {
    next(err)
  }
})
