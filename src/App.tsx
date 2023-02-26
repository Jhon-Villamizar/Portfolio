import { useEffect, useReducer } from 'react'
import './App.scss'
import { SET_THEME } from './store/actions/types'
import { AdminConsumer } from './store/Context'
import { InicialState } from './store/InitialState'
import { contextReducer } from './store/reducer'

const App = () => {
  const [state, dispatch] = useReducer(contextReducer, InicialState)
  useEffect(() => {
    console.log('effect => ', state)
  }, [state])

  return (
    <button
      className='App'
      onClick={() =>
        dispatch({
          type: 'SET_THEME',
          payload: !state.theme,
        })
      }
    >
      App
    </button>
  )
}

export default App
