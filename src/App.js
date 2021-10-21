
import './App.css';
import StarRating from './starrating';
import { Provider } from 'react-redux';
import Counter from './copoets/counter';
import store from './redux/counterstore';
//import ApiFetch from './apifetch';
function App() {
  return (
    <div className="App">
    <Provider store = {store} >
      {/*<ApiFetch />*/}
      <Counter store = {store} /></Provider>
     <StarRating />
      
      
    </div>
  );
}

export default App;
