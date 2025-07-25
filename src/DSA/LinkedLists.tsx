import React, { useState } from "react";

type ListNode = {
  id: number;
  value: string;
  next?: ListNode;
};

const LikedLists: React.FC = () => {
  // Create a simple linked list structure in state
  const [head] = useState<ListNode>({
    id: 1,
    value: "Node 1",
    next: {
      id: 2,
      value: "Node 2",
      next: {
        id: 3,
        value: "Node 3",
      },
    },
  });

  // Traverse linked list and collect values
  const traverseList = (node?: ListNode): string[] => {
    if (!node) return [];
    return [node.value, ...traverseList(node.next)];
  };

  const listValues = traverseList(head);

  return (
    <div>
      <h3>Linked List Values</h3>
      <ul>
        {listValues.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default LikedLists;
