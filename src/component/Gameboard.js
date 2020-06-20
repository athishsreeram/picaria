
import React from 'react';
import { Stage, Layer } from 'react-konva';
import ColoredRect from './Rect';
import URLImage from './URLImage';



class Gameboard extends React.Component {

   
    render() {

        return (
            <div>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <URLImage src="https://upload.wikimedia.org/wikipedia/en/5/5e/Picaria_Game_Board.png"  />

                        <ColoredRect
                            x={80}
                            y={650}
                            color='green'
                            draggable='true'
                        />

                        <ColoredRect
                            x={140}
                            y={650}
                            color='red'
                            draggable='true'
                        />
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Gameboard