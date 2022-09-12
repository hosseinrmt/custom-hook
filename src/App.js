import useFetch from "./hook/useFetch";

function App() {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <p>
          {data.map((u) => (
            <div>
              <span>{u.name}</span>
            </div>
          ))}
        </p>
      )}
    </div>
  );
}

export default App;
