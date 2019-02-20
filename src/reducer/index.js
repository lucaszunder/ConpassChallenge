import { combineReducers } from 'redux'
import hotspots from './hotspots'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
    hotspots,
    loadingBar: loadingBarReducer,
})

