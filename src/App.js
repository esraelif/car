import React, { useState } from 'react';
import './App.css';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

function App() {
  const [carPosition, setCarPosition] = useState({ x: 250, y: 250 });
  const [carRotation, setCarRotation] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('gray');

  const handleUpClick = () => {
    setCarRotation(prevRotation => prevRotation + 180);
    setBackgroundColor('green'); // Yukarı butonuna basıldığında arka plan rengini yeşil yap
  };

  const handleDownClick = () => {
    setCarRotation(prevRotation => prevRotation - 180);
    setBackgroundColor('purple'); // Aşağı butonuna basıldığında arka plan rengini mor yap
  };

  const handleKeyDown = (event) => {
    const moveDistance = 2500; // Klavye tuşlarına basıldığında arabanın hareket edeceği mesafe
    switch (event.key) {
      case 'ArrowRight':
        setCarPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x + moveDistance }));
        setBackgroundColor('green'); // Sağa hareket ettiğinde arka plan rengini yeşil yap
        break;
      case 'ArrowLeft':
        setCarPosition(prevPosition => ({ ...prevPosition, x: prevPosition.x - moveDistance }));
        setBackgroundColor('green'); // Sola hareket ettiğinde arka plan rengini yeşil yap
        break;
      default:
        break;
    }
  };

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
      <div className="top-icon" onClick={handleUpClick}>
        <TouchAppIcon style={{ fontSize: 64 }} />
      </div>
      <div
        className="car"
        style={{
          left: carPosition.x,
          top: carPosition.y,
          transform: `rotate(${carRotation}deg)`,
          backgroundColor: backgroundColor,
          transition: 'transform 1s ease, background-color 1s ease'
        }}>
        <TimeToLeaveIcon style={{ fontSize: 64 }} />
      </div>
      <div className="bottom-icon" onClick={handleDownClick}>
        <TouchAppIcon style={{ fontSize: 64 }} />
      </div>
    </div>
  );
}

export default App;
