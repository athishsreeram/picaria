import React from 'react';
import { Stage, Layer } from 'react-konva';
import ColoredRect from './Rect';
import URLImage from './URLImage';



var currents = [
    {
        x: 700,
        y: 200,
        color: 'red',
        name: 'r1',
        draggable: 'true'
    },
    {
        x: 700,
        y: 260,
        color: 'red',
        name: 'r2',
        draggable: 'true'
    },
    {
        x: 700,
        y: 320,
        color: 'red',
        name: 'r3',
        draggable: 'true'
    },
    {
        x: 700,
        y: 380,
        color: 'green',
        name: 'g1',
        draggable: 'true'
    },
    {
        x: 700,
        y: 440,
        color: 'green',
        name: 'g2',
        draggable: 'true'
    },
    {
        x: 700,
        y: 500,
        color: 'green',
        name: 'g3',
        draggable: 'true'
    }
];


class Gameboard extends React.Component {

    callbackFunction = (childData) => {
        console.log(childData);
        console.log(currents);
    }

    createBoard = () => {
        let board = []

        currents.map(
            (current,index) =>
                board.push(<ColoredRect key={current.name}
                    x={current.x}
                    y={current.y}
                    color={current.color}
                    draggable={current.draggable}
                    name={current.name}
                    parentCallback={this.callbackFunction}
                />
        ));

        return (board);
    }



    render() {

        return (
            <div>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>

                        <URLImage src="https://upload.wikimedia.org/wikipedia/en/5/5e/Picaria_Game_Board.png" />

                        {this.createBoard()}


                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default Gameboard