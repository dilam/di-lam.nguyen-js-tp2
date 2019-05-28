import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component {
  constructor() {
    super();

    this.state = {
      isOver: false,
      content: "?"
    }
  }

  toggleIsOver(event) {
    this.setState({ isOver: !this.state.isOver })
  }

  render() {
    return (
      <div
        onMouseOver={e => this.toggleIsOver(e)}
        onMouseOut={e => this.toggleIsOver(e)}
        onClick={() => this.props.onClickCell()}
        style={{...cellStyle, backgroundColor: this.state.isOver ? "#ddd" : "white"}}
      >{this.props.content}</div>
    );
  }
}

export default Cell;
