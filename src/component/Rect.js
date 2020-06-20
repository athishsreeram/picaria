
import React from 'react';
import {  Rect } from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {
  
  state = {
    isDragging: false,
    color: '',
    x: 50,
    y: 50
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
        onDragStart={() => {
          this.setState({
            isDragging: true
          });
        }}
        onDragEnd={e => {
          this.setState({
            isDragging: false,
            x: e.target.x(),
            y: e.target.y()
          });
          console.log(e.target.x() + " " +e.target.x());
        }}
      />
    );
  }
}

export default ColoredRect