```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Updates every second
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```