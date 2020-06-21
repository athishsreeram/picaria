import React from 'react';
import { Stage, Layer } from 'react-konva';
import ColoredRect from './Rect';
import URLImage from './URLImage';



var current = [
    {
        x: 700,
        y: 200,
        color: 'red',
        name: 'r1',
        draggable: true
    },
    {
        x: 700,
        y: 260,
        color: 'red',
        name: 'r2',
        draggable: true
    },
    {
        x: 700,
        y: 320,
        color: 'red',
        name: 'r3',
        draggable: true
    },
    {
        x: 700,
        y: 380,
        color: 'green',
        name: 'g1',
        draggable: false
    },
    {
        x: 700,
        y: 440,
        color: 'green',
        name: 'g2',
        draggable: false
    },
    {
        x: 700,
        y: 500,
        color: 'green',
        name: 'g3',
        draggable: false
    }
];


class Gameboard extends React.Component {


    state =  {
        list : current
    };

    callbackFunction = (childData) => {

        const elementsIndex = this.getIndex(childData.name,this.state.list,'name')

        current[elementsIndex] = childData;

        current = this.updateDrag(childData.color,this.state.list)

        this.setState(
            {
            list: current   
            }
        )

    }

    getIndex(value, arr, prop) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i][prop] === value) {
                return i;
            }
        }
        return -1; //to handle the case where the value doesn't exist
    }

    updateDrag(value, arr) {
        for(var i = 0; i < arr.length; i++) {
            if(arr[i]['color'] !== value) {
                arr[i]['draggable'] = true
            }else{
                arr[i]['draggable'] = false
            }
        }

        return arr
    }

    createBoard = () => {
        let board = []

        this.state.list.map(
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

        console.log(board);
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