// src/index.jsx
import '../styles/globals.css';
import Footer from './components/Footer';
import coffeeSplash from './images/CoffeeSplash.png';

export default function Home() {
  return (
    <>
      {/* ...rest of your sections */}
      <div
        className="choose-card"
        style={{ backgroundImage: `url(${coffeeSplash})` }}
      >
        {/* content */}
      </div>
      <Footer />
    </>
  );
}
