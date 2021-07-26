import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Question from './components/question/Question';
import { questionOne, questionThree, questionTwo } from './components/question/Data';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Question {...questionOne} />
      <Question {...questionTwo} />
      <Question {...questionThree} />
    </Router>
  );
}

export default App;
