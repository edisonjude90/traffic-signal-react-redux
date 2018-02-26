import { GO, CAUTION, STOP } from '../constants/constants';

export const signalGo  = ()=>({
    type:GO
});

export const signalCaution = ()=>({
    type:CAUTION
});

export const signalStop = ()=>({
    type:STOP
});
