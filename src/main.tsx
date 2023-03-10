import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'

const composeAlt = (window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composeEnhancers = composeAlt(applyMiddleware( thunk))

const store = createStore(
  rootReducer,
  composeEnhancers, 
  )

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
