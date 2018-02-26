import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signalCaution, signalGo, signalStop } from './actions/action-type';

const ConnectSignalBoardControl = ( { signalGo,signalCaution,signalStop } )=>(

    <div className = "btn-group-vertical">
        <button className = "btn-default" onClick = { ()=>{ signalGo() } } > Go </button>
        <button className = "btn-default" onClick = { ()=>{ signalCaution() } } > Caution </button>
        <button className = "btn-default" onClick = { ()=>{ signalStop() } } > Stop </button>
    </div>

);

const mapDispatchToProps = (dispatch)=>{
    return {
        signalGo:() => (dispatch(signalGo())),
        signalCaution:() => (dispatch(signalCaution())),
        signalStop: () => (dispatch(signalStop()))
    };
};

const TrafficSignalBoardControl = connect(null,mapDispatchToProps)(ConnectSignalBoardControl);

export default TrafficSignalBoardControl;