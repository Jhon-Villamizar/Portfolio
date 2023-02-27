import { useEffect, useReducer } from 'react'
import './App.scss'
import { InicialState } from './store/InitialState'
import { contextReducer } from './store/reducer'

const App = () => {
  const [state, dispatch] = useReducer(contextReducer, InicialState)
  useEffect(() => {
    console.log('effect => ', state)
  }, [state])

  return (
    <>
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
      <select
        value={state.lenguage}
        onChange={({ target }) => dispatch({ type: 'SET_LEGUAGES', payload: target.value })}
      >
        <option value='es'>Espanol</option>
        <option value='en'>Ingles</option>
      </select>
    </>
  )
}

export default App
