import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: false,
      winner: null
    };
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    const cells = state.cells;
    if ((cells[0] != null && cells[0] === cells[1] && cells[0] === cells[2])
      || (cells[3] != null && cells[3] === cells[4] && cells[3] === cells[5])
      || (cells[6] != null && cells[6] === cells[7] && cells[6] === cells[8])
      || (cells[0] != null && cells[0] === cells[3] && cells[0] === cells[6])
      || (cells[1] != null && cells[1] === cells[4] && cells[1] === cells[7])
      || (cells[2] != null && cells[2] === cells[5] && cells[2] === cells[8])
      || (cells[0] != null && cells[0] === cells[4] && cells[0] === cells[8])
      || (cells[2] != null && cells[2] === cells[4] && cells[2] === cells[6]))
      state.winner = "Player " + (!state.currentPlayer + 1);
    return state;
  }

  handleClickCell = (cellIndex) => {
    if (this.state.winner != null)
      return;

    const cells = this.state.cells;

    if (cells[cellIndex] != null)
      return;

    cells[cellIndex] = this.state.currentPlayer ? "X" : "O";
    this.setState({cells: cells, currentPlayer: !this.state.currentPlayer});
  }

  render() {
    return (
      <div style={gameLayoutStyle}>
        <GameInfo currentPlayer={"player " + (this.state.currentPlayer + 1)} gameState={this.state.winner}/>
        <Board cells={this.state.cells} onClickCell={cellIndex => this.handleClickCell(cellIndex)} />
      </div>
    );
  }
}

export default GameLayout;
