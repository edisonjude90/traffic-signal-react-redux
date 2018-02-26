import { GO, STOP, CAUTION } from '../constants/constants';

const initalState = {
    Go:true,
    Caution:false,
    Stop:false
};

const rootReducer = (state = initalState, action ) => {

    switch(action.type){
        case GO:
            return {
                ...state,
                Go:true,
                Caution:false,
                Stop:false
            };
        break;
        case STOP:
            return {
                ...state,
                Go:false,
                Caution:false,
                Stop:true
            };
        break;
        case CAUTION:
            return {
                ...state,
                Go:false,
                Caution:true,
                Stop:false
            };
        break;
        default:
            return state;
        break;
    }

};

export default rootReducer;

