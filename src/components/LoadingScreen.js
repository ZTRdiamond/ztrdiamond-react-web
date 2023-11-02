import React, { useState, useEffect } from 'react';

function LoadingScreen() {
  const [text, setText] = useState('Please Wait...');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [gradient, setGradient] = useState('#01bdff, #fff, #ff00ff');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loopNum === 0) {
        setGradient('#01bdff, #fff, #ff00ff');
      } else if (loopNum === 1) {
        setGradient('#00ff00, #fff, #ff00ff');
      } else if (loopNum === 2) {
        setGradient('#ff00ff, #fff, #00ff00');
      } else if (loopNum === 3) {
        setGradient('#ff0000, #fff, #00ff00');
      } else if (loopNum === 4) {
        setGradient('#00ff00, #fff, #ff0000');
      } else if (loopNum === 5) {
        setGradient('#ff0000, #fff, #0000ff');
      } else if (loopNum === 6) {
        setGradient('#0000ff, #fff, #ff0000');
      }

      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => prev + '.');
      }

      if (!isDeleting && text === 'Please Wait...') {
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => (prev === 6 ? 0 : prev + 1));
      }
    }, 200);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum]);

  return (
    <div className="loading-screen" style={{ background: `linear-gradient(${gradient})` }}>
      <h2>{text}</h2>
    </div>
  );
}

export default LoadingScreen;