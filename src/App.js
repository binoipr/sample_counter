import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./actions/counterActions";
import { login, logout } from "./actions/authAction";
function App() {
  const counter = useSelector((state) => state.counter.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Counter: {counter}</h2>
      <div style={{ margin: "15px" }}>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          reset
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(login());
          }}
        >
          login
        </button>
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          logout
        </button>
        {auth ? <h2>Hello Binoy</h2> : <h3></h3>}
      </div>
    </div>
  );
}

export default App;
