import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from "redux-form";
import appReducer from './appReducer'

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    appreducer:appReducer
    // rest of your reducers
  })

export default rootReducer;