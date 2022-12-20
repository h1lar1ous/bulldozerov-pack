import styles from './App.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className={styles.container}>
        <Header />
        <Hero />
        <Portfolio />
        <Footer />
    </div>
  );
}

export default App;
