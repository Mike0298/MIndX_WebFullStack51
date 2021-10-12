import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/counter";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
