
import React from 'react';
import {  Rect } from 'react-konva';
import Konva from 'konva';

class ColoredRect extends React.Component {
  
  state = {
    draggable: false,
    color: '',
    x: 50,
    y: 50,
    name: ''
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
        onDragEnd={e => {
          this.setState({
            draggable: false,
            x: e.target.x(),
            y: e.target.y(),
            color: this.props.color,
            name: this.props.name
          });

          this.props.parentCallback(this.state);
          
        }}
      />
    );
  }
}

export default ColoredRect