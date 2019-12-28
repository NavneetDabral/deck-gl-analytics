import {initialState} from '../index'
import {ADD_CSV_DATA ,ADD_COLUMNS,REMOVE_TEST, REMOVE_MONTHLY_DATA,LOADER_FLAG,ADD_USER_INFO ,ADD_MONTHLY_DATA,ADD_LOCATION_INFO} from '../actions';

function AppReducer(state = initialState.appreducer, action) {
    switch (action.type) {
      case ADD_CSV_DATA:
        return Object.assign({}, state, {
          appState: {
            ...state.appState, 
           locationData:action.payload
          }
        })
        

        case ADD_COLUMNS:
          return Object.assign({}, state, {
            appState: {
              ...state.appState, 
             noOfCol:action.payload
            }
          })

          case ADD_USER_INFO:
          return Object.assign({}, state, {
            appState: {
              ...state.appState, 
             userInfo:action.payload,
             test:true
            }
          })

          case REMOVE_TEST :
              return Object.assign({}, state, {
                appState: {
                  ...state.appState,
                 userInfo:null
                }
              })

          case ADD_LOCATION_INFO:
            return Object.assign({}, state, {
              appState: {
                ...state.appState, 
               locationInfo:action.payload,
               location_status:true
              }
            })

            case ADD_MONTHLY_DATA:
            return Object.assign({}, state, {
              appState: {
                ...state.appState, 
               monthlyInfo:action.payload,
              }
            })
            
            case REMOVE_MONTHLY_DATA:
            return Object.assign({}, state, {
              appState: {
                ...state.appState, 
               monthlyInfo:null,
              }
            })

            case LOADER_FLAG:
                let flag=state.appState.analytics_flag; 
              return (Object.assign({}, state, {
               
                appState: {
                  ...state.appState, 
                   analytics_flag:!flag,
                
                }
              }))
          
        
      
      
      default:
        return state
    }
  }
  

  export default AppReducer;