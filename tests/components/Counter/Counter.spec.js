import React from 'react'
import { bindActionCreators } from 'redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Counter from 'components/Counter/Counter'
import { shallow, mount } from 'enzyme'
import { simulateEvent } from '../../test-utils'

describe('(Component) Counter', () => {
  describe('Elements', () => {
    let _props, _spies, _wrapper

    beforeEach(() => {
      _spies = {}
      _props = {
        counter: 5,
        ...bindActionCreators({
          doubleAsync: (_spies.doubleAsync = sinon.spy()),
          increment: (_spies.increment = sinon.spy())
        }, _spies.dispatch = sinon.spy())
      }
      _wrapper = shallow(<Counter {..._props} />)
    })

    it('Should render as a <div>.', () => {
      expect(_wrapper.is('div')).to.equal(true)
    })

    it('Should render with an <h2> that includes Sample Counter text.', () => {
      expect(_wrapper.find('h2').text()).to.match(/Counter:/)
    })

    it('Should render props.counter at the end of the sample counter <h2>.', () => {
      expect(_wrapper.find('h2').text()).to.match(/5$/)
      _wrapper.setProps({counter: 8})
      expect(_wrapper.find('h2').text()).to.match(/8$/)
    })

    it('Should render exactly two buttons.', () => {
      expect(_wrapper.find('FlatButton')).to.have.length(1)
      expect(_wrapper.find('RaisedButton')).to.have.length(1)
    })

  })

  describe('An increment button...', () => {
    let _spies, _props, _wrapper, _button

    beforeEach(() => {
      _spies = {}
      _props = {
        counter: 5,
        ...bindActionCreators({
          doubleAsync: (_spies.doubleAsync = sinon.spy()),
          increment: (_spies.increment = sinon.spy())
        }, _spies.dispatch = sinon.spy())
      }
      _wrapper = mount(<MuiThemeProvider><Counter {..._props} /></MuiThemeProvider>)
      _button = _wrapper.find('FlatButton')
    })

    it('Should have a label prop', () => {
      expect(_button.props().label).to.equal('increment');
    });

    it('Should dispatch a `increment` action when clicked', () => {
      _spies.dispatch.should.have.not.been.called

      simulateEvent(_button, 'touchTap')

      _spies.dispatch.should.have.been.called
      _spies.increment.should.have.been.called
    });
  })
})
