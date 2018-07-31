//Import

//Actions(변수정의)

/* 시작 */
const START_TIMER = 'START_TIMER';

/* 멈춤  */
const RESTART_TIMER = 'RESTART_TIMER';

/* 현재 카운트에 추가 */
const ADD_SECOND = 'ADD_SECOND';

//Action Creators

function startTimer(){
    return {
        type:START_TIMER
    }
}

function restartTimer(){
    return {
        type:RESTART_TIMER
    }
}

function addSecond(){
    return {
        type:ADD_SECOND
    }
}

//Reducer(state,action 필요)
const TIMER_DURATION = 1500;
const initialState = {
    isPlaying : false,
    /*경과시간(카운트 초기시간) */
    elapsedTime : 0,
    timerDuration : TIMER_DURATION
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case START_TIMER:
        return applyStartTimer(state, action);
      case RESTART_TIMER:
        return applyRestartTimer(state, action);
      case ADD_SECOND:
        return applyAddSecond(state, action);
      default:
        return state;
    }
  }

//Reducer Functions
function applyStartTimer(state, action) {
    return {
      ...state,
      isPlaying: true,
      elapsedTime: 0
    };
  }

  function applyRestartTimer(state, action) {
    return {
      ...state,
      isPlaying: false,
      elapsedTime: 0
    };
  }
//시간을 재는 기능
function applyAddSecond(state,action){
    if(state.elapsedTime < TIMER_DURATION){
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    }else{
        return {
            ...state,
            isPlaying: false
        }
    }
}

//Export Action Creators
const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
}

export {actionCreators};
//Export Reducer
export default reducer;

