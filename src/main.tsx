import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";
import {store} from "../src/store/store";
import {fetchUsers} from "./fetures/users/usersSlice";

store.dispatch(fetchUsers());



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
      <App />
    </Provider>
)
