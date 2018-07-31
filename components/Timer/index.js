//connect : 컴포넌트를 store에 연결하는것을 도와준다
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators as tomatoActions} from "../../reducer";
import Timer from "./presenter";
/**
 * reducer(reducer.js) 로부터 props를 받아오며 state를 handle한다
 */
function mapStateToProps(state){
    const {isPlaying,elapsedTime,timerDuration} = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

function mapDispatchToProps(dispatch){
    return {
        startTimer:bindActionCreators(tomatoActions.startTimer,dispatch),
        restartTimer:bindActionCreators(tomatoActions.restartTimer,dispatch),
        addSecond:bindActionCreators(tomatoActions.addSecond,dispatch)
    }
}
//connect mapStateToProps to Timer
export default connect(mapStateToProps,mapDispatchToProps)(Timer)