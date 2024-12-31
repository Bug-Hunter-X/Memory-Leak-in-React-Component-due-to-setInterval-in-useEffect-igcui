# React setInterval Memory Leak

This repository demonstrates a common mistake in React applications: using `setInterval` within a `useEffect` hook without proper cleanup. This leads to memory leaks and unexpected behavior. 

The `bug.js` file shows the problematic code.  The `bugSolution.js` file shows the corrected version.

## Problem

The `setInterval` function continuously updates the component's state every second, but it never stops.  When the component unmounts, the interval continues to run, leading to a memory leak. 

## Solution

The solution involves using the return value of the `useEffect` hook to clear the interval when the component unmounts. This ensures that the interval is stopped when it's no longer needed.