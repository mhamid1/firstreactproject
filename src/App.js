import './App.css';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './CSS/style.css'



function App() {
  var abc = ()=>{
    console.log('Muhamnmad Hamid');
  }
  return (
    <div>
        <Header name= "Header" f={abc}/>
        <Content name= "Content" f={abc}/>
        <Footer name= "Footer" f={abc}/>
  
    </div>
  )
}




export default App;
