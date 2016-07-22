import React from 'react'
import Radium from 'radium'
import classes from './Counter.scss'

const styles = {
  counter: {
    color: 'red',
    ':hover': {
      color: 'blue'
    }
  }
}

export const Counter = (props) => (
  <div>
    <h2 className={classes.counterContainer}>
      Counter:
      {' '}
      <span style={styles.counter}>
        {props.counter}
      </span>
    </h2>
    <button style={styles.button} className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  doubleAsync: React.PropTypes.func.isRequired,
  increment: React.PropTypes.func.isRequired
}

export default Radium(Counter)
