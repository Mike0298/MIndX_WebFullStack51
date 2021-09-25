import React, {Component} from "react"

class lifecycle extends Component {
    constructor(props){
        super(props)
        this.state = {action: ' '}
        console.log(('1-Constructor'));
    }

    static getDerivedStateFromProps() {
        console.log('2-getDerivedStateFromProps');
    }

    componentDidMount() {
        console.log("4-componentDidMount");
    }

    componentWillUnmount(){
        console.log("5-componentWillUnmount");
    }

    render(){
        return (
            
        )
    }
}