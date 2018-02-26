import React, {Component} from 'react';
import { signalGo } from './actions/action-type';
import { connect } from 'react-redux';


const mapStateToProps = (signal) => ({
    go:signal.Go,
    caution:signal.Caution,
    stop:signal.Stop
});

const ConnectTrafficSignalBoard = ({go,caution,stop})=>{

    const GoActive = (go) ? "active" : "";
    const CautionActive = (caution) ? "active" : "";
    const StopActive = (stop) ? "active" : "";

    const GoClass = "round green " + GoActive;
    const CautionClass = "round yellow " + CautionActive;
    const StopClass = "round red " + StopActive;

    return (
            <div>   
                <div className = "traffic-signal">
                        <div className = { GoClass }>

                        </div>
                        <div className = { CautionClass }>

                        </div>
                        <div className = { StopClass } >

                        </div>  
                </div>  
                <div className = "traffic-signal-board">
                   Speed Trills But Kills
                </div>  
            </div>
    )

};


const TrafficSignalBoard  = connect(mapStateToProps)(ConnectTrafficSignalBoard);

export default TrafficSignalBoard;
