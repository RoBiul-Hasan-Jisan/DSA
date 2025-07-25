import React, { useState } from "react";

type Edge = {
  from: number;
  to: number;
};

const Graph: React.FC = () => {
  // Simple graph with nodes and edges
  const [nodes] = useState<number[]>([1, 2, 3, 4, 5]);
  const [edges] = useState<Edge[]>([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
  ]);

  return (
    <div>
      <h3>Graph Nodes</h3>
      <ul>
        {nodes.map((node) => (
          <li key={node}>Node {node}</li>
        ))}
      </ul>

      <h3>Graph Edges</h3>
      <ul>
        {edges.map((edge, index) => (
          <li key={index}>
            Edge from {edge.from} to {edge.to}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Graph;
