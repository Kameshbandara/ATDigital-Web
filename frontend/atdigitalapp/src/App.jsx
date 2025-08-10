import './App.css';
import Digital from './components/Digital';
import Footer from './components/Footer';
import Header from './components/Header';
import Question from './components/Question';
import Services from './components/Services';



function App() {
  

  return (
    <>
    <div className='w-full overflow-hidden'>
      <Header/>
      <Services/>
      <Digital/>
      <Question/>
      <Footer/>
      
    </div>

    </>
  )
}

export default App
