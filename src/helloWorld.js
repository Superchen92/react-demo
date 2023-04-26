// function upperStr(str){
//     if(str.length > 0){
//         const strArr = str.split('')
//         let upperStr = ''
//         strArr.forEach(element => {
//             upperStr += element.toUpperCase()   
//         });
//         return upperStr
//     }
// }

// function HelloWorld(props){
//     console.log(props.str + '1')
//     const element = <h1>{upperStr(props.str)}</h1>
//     return element
// }

// export default HelloWorld

import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerId = setInterval(()=>{
            this.tick()
        },1000)
        console.log('componentDidMount')
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        )
    }
}

export default Clock
