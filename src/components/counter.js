import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../action'

/* actions ={
    inc: inc,
    dec: dec,
    reset: reset}*/

/*const bindActionCreator = (creator, dispatch) => (...args) => {  работа встроенной в redux функции bindActionCreators
  dispatch(creator(...args));
}*/



const Counter = ({counter, inc, dec, reset}) => {
    return(
        <div className="content">
            <div className="counter-container">
                <h1>{counter}</h1>
            </div>
            <div className="btn-container">
                <button onClick={inc} className="btn btn-inc"><img src="./img/Plus.png" alt="INC"/></button>
                <button onClick={dec} className="btn btn-dec"><img src="./img/Minus.png" alt="DEC"/></button>
                <button onClick={reset} className="btn btn-reset"><img src="./img/Reset.png" alt="RESET"/></button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter) ;

