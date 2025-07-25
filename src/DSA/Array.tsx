//import React from "react";

const Array = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 text-gray-800">
      <h1 className="text-3xl font-bold text-blue-600">What is an Array?</h1>
      <p>
        An array is a linear data structure that stores a fixed-size sequence of
        elements of the same data type in contiguous memory locations.
      </p>

      <section>
        <h2 className="text-xl font-semibold">Key Points:</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Elements are indexed: index starts at 0.</li>
          <li>Fast access using index: O(1) time.</li>
          <li>Fixed size (in most languages).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Array Representation</h2>
        <div className="font-mono bg-gray-100 p-4 rounded">
          <div>Index: &nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp; 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4</div>
          <div>Element: 10  20  30  40  50</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Array Operations</h2>
        <table className="w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border p-2">Operation</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Time Complexity</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Access", "Get value at a specific index", "O(1)"],
              ["Search", "Linear search for a value", "O(n)"],
              ["Insertion", "Add at the end (if space)", "O(1)"],
              ["Insertion", "Insert at a position (shift needed)", "O(n)"],
              ["Deletion", "Remove an element (shift needed)", "O(n)"],
              ["Traversal", "Visit each element", "O(n)"],
            ].map(([op, desc, time], idx) => (
              <tr key={idx}>
                <td className="border p-2">{op}</td>
                <td className="border p-2">{desc}</td>
                <td className="border p-2">{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Array Types</h2>
        <div className="space-y-4">
          <div>
            <p className="font-semibold">1. One-Dimensional Array (1D)</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
{`int arr[5] = {1, 2, 3, 4, 5};`}
            </pre>
          </div>
          <div>
            <p className="font-semibold">2. Two-Dimensional Array (2D)</p>
            <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
{`int matrix[3][3] = {
  {1, 2, 3},
  {4, 5, 6},
  {7, 8, 9}
};`}
            </pre>
          </div>
          <div>
            <p className="font-semibold">3. Multi-Dimensional Array</p>
            <p>Nested arrays beyond 2D.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Dynamic Arrays</h2>
        <p>
          Languages like Python or C++ STL vector/Java ArrayList use dynamic
          arrays that can resize automatically.
        </p>
        <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
{`vector<int> v;
v.push_back(10);`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Advantages</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Fast access to elements using index.</li>
          <li>Easy to implement.</li>
          <li>Good locality of reference (cache-friendly).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Disadvantages</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Fixed size (static array).</li>
          <li>Insertion and deletion costly (O(n)).</li>
          <li>Cannot insert in between without shifting.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Common Array Problems in DSA</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Find the maximum/minimum element</li>
          <li>Reverse the array</li>
          <li>Kadane’s Algorithm (Maximum Subarray Sum)</li>
          <li>Binary Search</li>
          <li>Rotate array</li>
          <li>Check for duplicates</li>
          <li>Merge two sorted arrays</li>
          <li>Prefix Sum and Sliding Window Techniques</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Array Techniques to Master in DSA</h2>
        <table className="w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border p-2">Technique</th>
              <th className="border p-2">Description/Use Case</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Sliding Window", "Fixed or variable window problems"],
              ["Two Pointers", "Sorted arrays, duplicates, partitions"],
              ["Prefix Sum", "Range sum queries, subarrays"],
              ["Binary Search", "Sorted arrays, finding elements efficiently"],
              ["Hashing (via Map)", "Frequencies, duplicates, complements"],
              ["Sorting", "Required before using two pointers"],
            ].map(([tech, desc], idx) => (
              <tr key={idx}>
                <td className="border p-2">{tech}</td>
                <td className="border p-2">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Sample Code (C++)</h2>
        <div>
          <p className="font-semibold">Linear Search:</p>
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
{`int linearSearch(int arr[], int n, int key) {
  for(int i = 0; i < n; i++) {
    if(arr[i] == key) return i;
  }
  return -1;
}`}
          </pre>
        </div>

        <div>
          <p className="font-semibold mt-4">Reverse Array:</p>
          <pre className="bg-gray-100 p-2 rounded text-sm overflow-auto">
{`void reverseArray(int arr[], int n) {
  int start = 0, end = n - 1;
  while(start < end) {
    swap(arr[start], arr[end]);
    start++;
    end--;
  }
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Real-life Applications of Arrays</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Storing data in memory (like a list of names or numbers)</li>
          <li>Lookup tables (e.g., hash maps use arrays underneath)</li>
          <li>Matrix representation</li>
          <li>Image pixel data</li>
          <li>Implementing other data structures (heaps, stacks, queues)</li>
        </ul>
      </section>
    </div>
  );
};

export default Array;
