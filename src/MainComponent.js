import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newGame, dealCards } from './redux/actionCreators'
import Hand from './HandComponent'
import Players from './PlayersComponent'

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
                <div className="container">
                    <h1>Hello World!</h1>
                    <p>Num Players: {this.props.game.numPlayers}</p>
                    <button className="btn btn-primary" onClick={() => {
                        this.props.dealCards()
                        this.forceUpdate()
                    }}>Deal Cards</button>
                </div>
            )
        }
        const GameInProgress = () => {
            return(
                <div className="container">
                    <h1>Hello World!</h1>
                    <p>Num Players: {this.props.game.numPlayers}</p>
                    {/* <Players players={this.props.game.players} /> */}
                    <Hand cards={this.props.game.players[0].cards}/>
                    <button className="btn btn-primary" onClick={() => {
                        this.props.newGame()
                    }}>New Game</button>
                </div>
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