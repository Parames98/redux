import { Provider } from 'react-redux';
import '../styles/globals.css';
import store from "../store/store";

const MyApp = ({ Component }) => {
  return (
      <Provider store={store}>
        <Component/>
      </Provider>
  );
}

export default MyApp;
