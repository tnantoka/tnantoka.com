import { combineReducers } from 'redux'
import list from './links.json'
import { routerReducer } from 'react-router-redux'

const links = (state, action) => list

const visibilityFilter = (state = 'sns', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const rootReducer = combineReducers({
  links,
  visibilityFilter,
  routing: routerReducer
})

export default rootReducer
