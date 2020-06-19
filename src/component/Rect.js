
import React from 'react';
import {  Rect } from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render(x,y) {
    return (
        
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={50}
        height={50}
        fill={this.props.color}
        shadowBlur={5}
        draggable={this.props.draggable}
      />
    );
  }
}

export default ColoredRect