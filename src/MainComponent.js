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
        this.props.newGame(4)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(value){
        console.log(value);
        // this.props.newGame(value)
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
                    <Players players={this.props.game.players} />
                    <Hand cards={this.props.game.players[0].cards}/>
                    <form handleSubmit={this.handleSubmit}>
                        <label htmlFor="numPlayers">Number of Players</label>
                        <select id="numPlayers" name="numPlayers">
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <input className="btn btn-primary" type="submit" value="New Game" />
                    </form>
                    <button className="btn btn-primary mt-5" onClick={() => {
                        this.props.newGame()
                    }}>New Game</button>
                </div>
            )
        }
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