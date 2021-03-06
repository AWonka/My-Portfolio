import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <div className="nav-app">
      <Navigation />
      <Header />
      <Project />
      <Footer />  
    </div>
  );
}

export default App;
