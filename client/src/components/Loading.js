import React from "react";

const Loading = ({ size }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        src="/loading.gif"
        alt="Loading..."
        loading="lazy"
        className={`h-${size}`}
      />
    </div>
  );
};

export default Loading;
