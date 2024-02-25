import React from "react";
import "./Key.css"; // Import CSS for styling

const Key = () => {
  return (
    <div className="key">
      <div className="gradient-bar cover"></div>
      <div className="annotations">
        <div>Min</div> {/* Placeholder Value for Min Value */}
        <div>Max</div> {/* Placeholder Value for Max Value */}
      </div>
    </div>
  );
};

export default Key;