import './App.css';
import Header from './components/Header.js'
import Content from './components/Content';
import Slider from './components/Slider';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Content />
      <Products />
    </div>
  );
}

export default App;
