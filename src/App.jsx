import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainBar } from './components/mainbar/mainbar';
import { SideBar } from './components/sidebar/sidebar';
import { Footer } from './components/footer/footer';
import { SignIn } from './components/signIn/signIn';
import { UserType } from './components/userType/userType';
import { BrandCreds } from './components/brandsCreds/brandsCreds';

function App() {
  return (
     <Router>
      <Routes>
        <Route path='/' element={<div className='App'>
          <div className="App-body-upr">
            <div><SideBar /></div>
            <div><MainBar /></div>
          </div>
          <div><Footer /></div>
        </div>} />

        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<UserType />} />
        <Route path="/brandCreds" element={<BrandCreds />} />
      </Routes>
     </Router>
  );
}

export default App;