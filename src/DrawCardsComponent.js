import React, { Component } from "react";
import { connect } from "react-redux";
import { discardCard, drawCard, passTurn } from "./redux/actionCreators";

const mapStateToProps = state => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = {
    discardCard,
    drawCard,
    passTurn
}

function RenderCard(props){
    return(
        <img src="PlayingCards/card-back1.png" alt="Face down card" />
    )
}

class DrawCards extends Component {
    constructor(props) {
        super(props)
    }
    handleClick(index, card){
        console.log(this);
        this.props.discardCard(index, this.props.game.target)
        this.props.drawCard(card, 0)
        this.props.passTurn()
    }
    render(){
        const cards = this.props.game.players[this.props.game.target].cards.map((card, index) => {
            return (
                <div className="col my-3" key={card.name}>
                    <button onClick={() => {
                        this.handleClick(index, card)
                        this.forceUpdate()
                        this.props.mainComponent.forceUpdate()
                    }}>
                        <RenderCard />
                    </button>
                </div>
            )
        })
        return(
            <div className="row">
                {cards}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawCards)