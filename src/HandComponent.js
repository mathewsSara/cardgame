import React from "react";

function RenderCard({card}){
    return(
        <p>{card.name}</p>
    )
}

export default function Hand(props){
    const hand = props.cards.map(card => {
        return(
            <div key={card.name}>
                <RenderCard card={card} />
            </div>
        )
    })
    return(
        <div>
            {hand}
        </div>
    )
}