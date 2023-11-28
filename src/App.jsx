import './App.css';
import { MainBar } from './components/mainbar/mainbar';
import { SideBar } from './components/sidebar/sidebar';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className='App'>

      <div className="App-body-upr">
        <div><SideBar/></div>
        <div><MainBar/></div>
      </div>
      
      <div><Footer/></div>
      
    </div>
  );
}

export default App;