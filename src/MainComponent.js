import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newGame } from './redux/actionCreators'

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = {
    newGame,
}

class Main extends Component {
    constructor(props){
        super(props)
        this.props.newGame()
    }
    
    render(){
        console.log(this.props);
        return (
            <React.Fragment>
                <h1>Hello World!</h1>
                <p>Num Players: </p>
            </React.Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)