import './App.css';
import Quiz from './component/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './store';





function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Quiz />
      </Provider>
     </div>
  );
}

export default App;
