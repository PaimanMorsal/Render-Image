import "./index.css";
import React, { useRef } from "react";

function App() {
  const fileRef = useRef();
  function clickBtn() {
    fileRef.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={fileRef}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={clickBtn}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
