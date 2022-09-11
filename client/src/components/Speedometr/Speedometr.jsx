import React from "react";
import { connect } from 'react-redux';
import { highSpeed, lowSpeed } from "../../store/actions/actions";

const Speedometr = ({timer, onLow, onHigh}) => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center ">
                <button onClick={onLow} className = "rounded-pill bg bg-primary">
                    Slowly
                </button> 
                <span className="mx-2">  I want to get data one time in {timer} second(s) </span>
                <button onClick={onHigh} className = "rounded-pill bg bg-primary">
                    Faster    
                </button>   
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLow : () => dispatch(lowSpeed()),
        onHigh : () => dispatch(highSpeed())
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data,
        prevData: state.prevData,
        timer: state.speed
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Speedometr);