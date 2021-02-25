import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CarouselSet from './components/Carousel/Carousel';
import Categories from './components/Categories/Categories';
import ShoesCategories from './components/ShowCategories/ShowCategories';
import Bag from './components/Bag/Bag';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <CarouselSet/>
      <Categories/>
      <ShoesCategories/>
      <Bag/>
      <Subscribe/>
    </div>
  );
}

export default App;
