import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CarouselSet from './components/Carousel/Carousel';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <CarouselSet/>
    </div>
  );
}

export default App;
