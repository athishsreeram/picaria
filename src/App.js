import React from 'react';
import './App.css';
import { Stage, Layer, Image, Rect } from 'react-konva';
import useImage from 'use-image';

const url = 'https://upload.wikimedia.org/wikipedia/en/5/5e/Picaria_Game_Board.png';



function App() {
  const [image] = useImage(url);


  
  return (
    <div>
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
        <Image image={image} />

      <Rect
        x={20}
        y={650}
        width={50}
        height={50}
        fill='red'
        shadowBlur={5}
        draggable='true'
        onDragEnd={() => {
          console.log(this.x)
        }}
      />

      <Rect
        x={80}
        y={650}
        width={50}
        height={50}
        fill='red'
        shadowBlur={5}
        draggable='true'
      />

      <Rect
        x={140}
        y={650}
        width={50}
        height={50}
        fill='red'
        shadowBlur={5}
        draggable='true'
      />

<Rect
        x={450}
        y={650}
        width={50}
        height={50}
        fill='green'
        shadowBlur={5}
        draggable='true'
      />


<Rect
        x={510}
        y={650}
        width={50}
        height={50}
        fill='green'
        shadowBlur={5}
        draggable='true'
      />

<Rect
        x={570}
        y={650}
        width={50}
        height={50}
        fill='green'
        shadowBlur={5}
        draggable='true'
      />
        </Layer>
      </Stage>
      </div>
  );
}

export default App;
