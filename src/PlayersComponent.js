import React, {Component} from 'react'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        game: state.game
    }
}

function RenderPlayer({player, index}){
    if(index === 0) return <React.Fragment />
    return(
        <React.Fragment>
            <h2>Player {index}</h2>
            <p>{player[index].cards.length} cards</p>
        </React.Fragment>
    )
}

class Players extends Component {
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.game.players);
        const arr = []
        for(let key in this.props.game.players){
            const value = this.props.game.players[key]
            arr.push({[key]: value})
        }
        console.log(arr);
        const players = arr.map((player, index) => {
            return(
                <div className="col" key={index}>
                    <RenderPlayer player={player} index={index} />
                </div>
            )
        })
        return(
            <div className="row">
                {players}
            </div>
        )
    }
}

export default connect(mapStateToProps)(Players)