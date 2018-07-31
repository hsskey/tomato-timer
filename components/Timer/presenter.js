import React , {Component} from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import Button from '../Button';

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    time -= minutes * 60;
  
    var seconds = parseInt(time % 60, 10);
  
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
      ? `0${seconds}`
      : seconds}`;
  
    return;
  }

/**
 * present.js : 보여지는 View를 관리
 */
class Timer extends Component {
    //재생 정지를 통해 시간이 가는것을 감지
    componentWillReceiveProps(nextProps){
        const currentProps = this.props
        // console.log(`current isPlaying : ${currentProps.isPlaying} and
        // the new isPlaying: ${nextProps.isPlaying}`)

        if(!currentProps.isPlaying &&nextProps.isPlaying){
            //start the interval
            const timerInterval = setInterval(()=>{
                currentProps.addSecond();
            },1000)
            this.setState({
                timerInterval
            })
        }else if(currentProps.isPlaying && !nextProps.isPlaying){
            //stop the interal
            clearInterval(this.state.timerInterval);
        }


    }

    render(){
        console.log(this.props);
        const {isPlaying,elapsedTime,timerDuration,startTimer,restartTimer} = this.props
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timerDuration-elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName={"play-circle"} onPress={startTimer} />
                    )}
                    {isPlaying && (
                        <Button iconName={"stop-circle"} onPress={restartTimer} />
                    )}
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#CE0B24"
    },
    upper : {
        flex:2,
        justifyContent:"center",
        alignItems: "center"
    },
    lower : {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    time:{
     color:"white",
     fontSize:120,
     fontWeight:"100"
    }
})

export default Timer