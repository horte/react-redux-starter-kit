import React from 'react'
import { RaisedButton, FlatButton } from 'material-ui'
import classes from './Counter.scss'

export const Counter = (props) => (
  <div>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span className={classes['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <FlatButton label='increment' onTouchTap={props.increment} />
    <RaisedButton label='double value (async)' onTouchTap={props.doubleAsync} />
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Counter
