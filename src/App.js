
import './App.scss';
import Css from './page/Css';
import Home from './page/Home';
import Image from './page/Image';
import Not from './page/Not';
import Router from './page/Router';
import StateProps from './page/StateProps';

     // 이거 이름 변경 가능함 근데 첫글자 대문자로 써야 컴포넌트로 인식함

import{Link,BrowserRouter,Route,Routes} from'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="wrap">
      <header>
       {/*  <nav style={{border:'1px solid white'}}> */}
        <nav>
        <Link to="/">Home</Link>
          <Link to="/css">css 활용</Link>
          <Link  to="/img">Image 활용</Link>
          <Link  to="/router" state='a100'>router (페이지이동)</Link>
          <Link  to="/props">state&props</Link>

        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/css' element={<Css/>}/>
          <Route path='/Img' element={<Image/>}/>
          <Route path='/*' element={<Not/>}/>
          <Route path='/router' element={<Router/>}/>
          <Route path='/props' element={<StateProps data='1000' name='props' aa='sss'/>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  
  );
}

export default App;

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );