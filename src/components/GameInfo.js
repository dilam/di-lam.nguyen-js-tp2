import React from "react";

// FIXME: change message and color based on `gameState`'s value

function GameTitle(props) {
  if (props.gameState === null) {
    return <h3>It's your turn {props.currentPlayer}</h3>
  } else {
    return <h3>{props.gameState} win!</h3>
  }
}

const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => (
  <GameTitle gameState={gameState} currentPlayer={currentPlayer}/>
);

export default GameInfo;
