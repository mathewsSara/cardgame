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
        const Loading = () => {
            return <h1>Loading...</h1>
        }
        const Loaded = () => {
            return(
                <React.Fragment>
                    <h1>Hello World!</h1>
                    <p>Num Players: {this.props.game.numPlayers}</p>
                </React.Fragment>
            )
        }
        console.log(this.props);
        if(this.props.game){
            return (
                <Loaded />
            )
        }
        return (
            <Loading />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)