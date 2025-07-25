//import React from "react";

const BinarySearch = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">What is Binary Search?</h1>
      <p>
        Binary Search is an efficient algorithm to search for an element in a
        sorted array by repeatedly dividing the search interval in half.
      </p>

      <ul className="list-disc ml-6">
        <li>Time Complexity: <strong>O(log n)</strong></li>
        <li>Space Complexity: <strong>O(1)</strong> (iterative), <strong>O(log n)</strong> (recursive)</li>
      </ul>

      <section>
        <h2 className="text-xl font-semibold">Requirements</h2>
        <p>The array must be sorted in increasing or decreasing order.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> How Binary Search Works (Increasing Order)</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Start with <code>low = 0</code> and <code>high = n - 1</code>.</li>
          <li>Find mid: <code>mid = (low + high) / 2</code>.</li>
          <li>If <code>arr[mid] == target</code>, return mid.</li>
          <li>If <code>arr[mid] &gt; target</code>, search left half.</li>
          <li>If <code>arr[mid] &lt; target</code>, search right half.</li>
          <li>Repeat until <code>low &gt; high</code>.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Iterative Binary Search (C++)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`int binarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Recursive Binary Search (C++)</h2>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`int binarySearchRecursive(int arr[], int low, int high, int key) {
    if (low > high) return -1;
    int mid = low + (high - low) / 2;
    if (arr[mid] == key) return mid;
    else if (arr[mid] < key)
        return binarySearchRecursive(arr, mid + 1, high, key);
    else
        return binarySearchRecursive(arr, low, mid - 1, key);
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Binary Search Example (Dry Run)</h2>
        <p>
          <strong>Array:</strong> [2, 4, 6, 8, 10, 12], <strong>key:</strong> 10
        </p>
        <ul className="list-disc ml-6">
          <li>low = 0, high = 5 → mid = 2 → arr[2] = 6 &lt; 10 → move right</li>
          <li>low = 3, high = 5 → mid = 4 → arr[4] = 10 → found!</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Edge Cases to Watch Out For</h2>
        <ul className="list-disc ml-6">
          <li>
            Use <code>mid = low + (high - low) / 2</code> to avoid integer overflow
          </li>
          <li>Always ensure array is sorted</li>
          <li>Use <code>lower_bound</code> / <code>upper_bound</code> for duplicates</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Variants of Binary Search</h2>

        <div>
          <h3 className="font-semibold mt-4">1. Lower Bound</h3>
          <p>Find first index where element is <strong>≥ key</strong>.</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
{`int lowerBound(int arr[], int n, int key) {
    int low = 0, high = n;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] < key) low = mid + 1;
        else high = mid;
    }
    return low;
}`}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold mt-4">2. Upper Bound</h3>
          <p>Find first index where element is <strong>&gt; key</strong>.</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
{`int upperBound(int arr[], int n, int key) {
    int low = 0, high = n;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] <= key) low = mid + 1;
        else high = mid;
    }
    return low;
}`}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold mt-4">3. First Occurrence</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
{`int firstOccurrence(int arr[], int n, int key) {
    int low = 0, high = n - 1, ans = -1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) {
            ans = mid;
            high = mid - 1;
        } else if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return ans;
}`}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold mt-4">4. Last Occurrence</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
{`int lastOccurrence(int arr[], int n, int key) {
    int low = 0, high = n - 1, ans = -1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) {
            ans = mid;
            low = mid + 1;
        } else if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return ans;
}`}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold mt-4">5. Binary Search in Descending Array</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
{`int binarySearchDesc(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) return mid;
        else if (arr[mid] < key)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}`}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold mt-4"> Binary Search on Answer (BS on Function)</h3>
          <p>Used in problems like finding square root or optimization.</p>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
{`int sqrtInt(int n) {
    int low = 0, high = n, ans = -1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if ((long long)mid * mid <= n) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}`}
          </pre>
        </div>

        <div>
          <h3 className="font-semibold mt-4">Search in Rotated Sorted Array</h3>
          <pre className="bg-gray-100 p-3 rounded text-sm overflow-auto">
{`int searchRotated(int arr[], int n, int key) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == key) return mid;

        if (arr[low] <= arr[mid]) {
            if (arr[low] <= key && key < arr[mid])
                high = mid - 1;
            else
                low = mid + 1;
        } else {
            if (arr[mid] < key && key <= arr[high])
                low = mid + 1;
            else
                high = mid - 1;
        }
    }
    return -1;
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold"> Summary Table</h2>
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-2">Type</th>
              <th className="border p-2">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Standard Binary Search", "Find element index"],
              ["Lower Bound", "First index ≥ key"],
              ["Upper Bound", "First index > key"],
              ["First/Last Occurrence", "Index of duplicates"],
              ["Descending Array", "Reverse conditions"],
              ["Binary Search on Answer", "Optimize value under condition"],
              ["Rotated Sorted Array", "Search in shifted arrays"],
            ].map(([type, purpose], i) => (
              <tr key={i}>
                <td className="border p-2">{type}</td>
                <td className="border p-2">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BinarySearch;
