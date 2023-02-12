import { Provider } from 'react-redux';
import '../styles/globals.css';
import store from "../store/store";

function MyApp({ Component, ...rest }) {
  return (
      <Provider store={store}>
        <Component/>
      </Provider>
  );
}

export default MyApp;
