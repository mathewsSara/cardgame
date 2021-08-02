import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newGame, dealCards } from './redux/actionCreators'
import Hand from './HandComponent'

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = {
    newGame,
    dealCards,
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
        const ReadyToDeal = () => {
            return(
                <React.Fragment>
                    <h1>Hello World!</h1>
                    <p>Num Players: {this.props.game.numPlayers}</p>
                    <button onClick={() => {
                        this.props.dealCards()
                        this.forceUpdate()
                    }}>Deal Cards</button>
                </React.Fragment>
            )
        }
        const GameInProgress = () => {
            return(
                <React.Fragment>
                    <h1>Hello World!</h1>
                    <p>Num Players: {this.props.game.numPlayers}</p>
                    <Hand cards={this.props.game.players[0].cards}/>
                </React.Fragment>
            )
        }
        console.log(this.props);
        if(this.props.game){
            if(this.props.game.players[0] !== undefined){
                return(
                    <GameInProgress />
                )
            } else {
                return (
                    <ReadyToDeal />
                )
            }
        }
        return (
            <Loading />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)