import Header from './components/Header';
import Info from './components/Info';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Info />
      <Schedule />
      <div className='event-music-image'></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
