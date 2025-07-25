
export default function Array() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ color: "#2c3e50", borderBottom: "2px solid #2980b9", paddingBottom: "10px" }}>Arrays Tutorial</h1>

      <section>
        <h2>What is an Array?</h2>
        <p>
          An <strong>array</strong> is a collection of elements identified by index or key. It is used to store multiple values in a single variable.
        </p>
      </section>

      <section>
        <h2>Key Properties of Arrays</h2>
        <ul>
          <li>Fixed or dynamic size depending on the programming language.</li>
          <li>Elements are stored in contiguous memory locations.</li>
          <li>Indexed starting from 0 in most programming languages.</li>
          <li>Supports operations like traversal, insertion, deletion, and searching.</li>
        </ul>
      </section>

      <section>
        <h2>Common Array Operations</h2>
        <ol>
          <li><strong>Traversal:</strong> Accessing each element one by one.</li>
          <li><strong>Insertion:</strong> Adding elements at a specific index or at the end.</li>
          <li><strong>Deletion:</strong> Removing elements from the array.</li>
          <li><strong>Searching:</strong> Finding elements by value or index.</li>
          <li><strong>Sorting:</strong> Arranging elements in ascending or descending order.</li>
        </ol>
      </section>

      <section>
        <h2>Example: Array in JavaScript</h2>
        <pre style={{ backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
          {`const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Output: 1
numbers.push(6); // Add 6 at the end
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]`}
        </pre>
      </section>

      <section>
        <h2>Why Are Arrays Important?</h2>
        <p>
          Arrays are fundamental data structures widely used in computer science and programming because they provide efficient access to elements and are the building blocks for more complex structures like lists, stacks, queues, and matrices.
        </p>
      </section>
    </div>
  );
}
