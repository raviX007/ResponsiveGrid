import "./App.css";
import React, { useState } from "react";
import "./styles.css";
import Image_0 from "./Assets/image_0.jpg";
import Image_1 from "./Assets/image_1.jpg";
import Image_2 from "./Assets/image_2.jpg";
import Image_3 from "./Assets/image_3.jpg";
import Image_4 from "./Assets/image_4.jpg";
import Image_5 from "./Assets/image_5.jpg";
import Image_6 from "./Assets/image_6.jpg";
import Image_7 from "./Assets/image_7.jpg";
import Image_8 from "./Assets/image_8.jpg";
import Image_9 from "./Assets/image_9.jpg";

function App() {
  return (
    <div className="App">
      <GridContainer />
    </div>
  );
}

export default App;

function GridBox({ selected, onClick }) {
  const backgroundColor = selected ? "green" : "black";

  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor,
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
}

function GridContainer() {
  const [selectedBoxes, setSelectedBoxes] = useState(Array(9).fill(false));

  const handleBoxClick = (index) => {
    const newSelectedBoxes = [...selectedBoxes];
    newSelectedBoxes[index] = !newSelectedBoxes[index];
    setSelectedBoxes(newSelectedBoxes);
  };

  const gridSize = Math.ceil(
    Math.sqrt(selectedBoxes.filter((selected) => selected).length)
  );

  return (
    <div style={{ margin: "10px" }}>
      {[...Array(3)].map((_, row) => (
        <div
          key={row}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "5px",
            gap: "5px",
          }}
        >
          {[...Array(3)].map((_, col) => {
            const index = row * 3 + col;
            return (
              <GridBox
                key={index}
                selected={selectedBoxes[index]}
                onClick={() => handleBoxClick(index)}
              />
            );
          })}
        </div>
      ))}
      <SelectedGrid selectedBoxes={selectedBoxes} gridSize={gridSize} />
    </div>
  );
}

function SelectedGrid({ selectedBoxes }) {
  
  const selectedIndices = selectedBoxes.reduce((acc, isSelected, index) => {
    console.log(index);
    if (isSelected) {
      acc.push(index);
    }
    return acc;
  }, []);
const numColumns = selectedIndices.length > 3 ? Math.ceil(selectedIndices.length / 2) : selectedIndices.length;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        gap: "10px",
        marginTop: "40px",
      }}
    >
      {/* Display selected boxes as images */}
      {selectedIndices.map((index) => (
        <img
          key={index}
          src={
            index === 0
              ? Image_0
              : index === 1
              ? Image_1
              : index === 2
              ? Image_2
              : index === 3
              ? Image_3
              : index === 4
              ? Image_4
              : index === 5
              ? Image_5
              : index === 6
              ? Image_6
              : index === 7
              ? Image_7
              : index === 8
              ? Image_8
              : index === 9
              ? Image_9
              : " "
          } 
          alt={`Image ${index}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", 
          }}
        />
      ))}
    </div>
  );
}
