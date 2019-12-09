// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    decrement = () => {
        const newCount = this.state.count - 1
        this.setState({
            secondsLeft: newCount
        })
    }

    render(){
        if(this.state.secondsLeft > 0){
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
        else 
            return <div>Boom!</div>
    }
}