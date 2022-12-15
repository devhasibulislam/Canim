import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </div>
  );
}

export default App;
