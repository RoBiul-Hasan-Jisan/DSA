import React from "react";

const Array: React.FC = () => {
  const demoArray = [1, 2, 3, 4, 5];

  return (
    <div>
      <p>Array Elements: {demoArray.join(", ")}</p>
    </div>
  );
};

export default Array;
