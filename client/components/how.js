import React from 'react'
import './how.css'
class How extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="checkboxdiv">
        <p className="tasks">Daily Tasks:</p>
        <div className="box">
          <input id="one" type="checkbox" />
          <span className="check" />
          <label htmlFor="one">
            I sent 1-2 LinkedIn Messages to reach out!
          </label>
        </div>
        <div className="box">
          <input id="two" type="checkbox" />
          <span className="check" />
          <label htmlFor="two">I have spent at least an hour studying.</label>
        </div>
        <div className="box">
          <input id="two" type="checkbox" />
          <span className="check" />
          <label htmlFor="two">
            I have done at least 2 algoExpert or LeetCode questions.
          </label>
        </div>
        <div className="box">
          <input id="two" type="checkbox" />
          <span className="check" />
          <label htmlFor="two">I have applied to 2 jobs today.</label>
        </div>
        <p className="tasks">Bonus points: </p>
        <div className="box">
          <input id="two" type="checkbox" />
          <span className="check" />
          <label htmlFor="two">
            I actually took a break from looking at computer today.
          </label>
        </div>
        <div className="box">
          <input id="two" type="checkbox" />
          <span className="check" />
          <label htmlFor="two">
            I have gave myself a pat in the back today.
          </label>
        </div>
      </div>
    )
  }
}

export default How
