import { SMURF_SUCCESS, SMURF_FAILURE, SMURF_LOAD, ADDING_SMURF } from '../actions'


const initialState = {
    smurfs: [],
    isFetching: false,
    error: null
}

export function reducer(state = initialState, action){
    switch(action.type){
      case SMURF_LOAD:
          return {
              ...state,
              isFetching: true,
          }

          case SMURF_SUCCESS:
              return {
                  ...state,
                  smurfs: action.payload,
                  isFetching: true,
                
              }
            case SMURF_FAILURE:
                return {
                    ...state,
                    error: action.payload,
                   isFetching: true
                }
              case ADDING_SMURF:
                  return {
                      ...state,
                      smurfs: action.payload.data
                  }
             
          default:
              return state

    }
}