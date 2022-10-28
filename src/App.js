import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/body';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div id="app_body">
      <Body />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
