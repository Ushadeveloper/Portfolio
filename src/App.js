//import logo from './logo.svg';
import './App.css';
import './table.css'
// import Navbar from './components/navbarsection.components';
// import Section1 from './components/section1.component';
// import ArrayShow from './components/showdata.components';
//import Pracprops from './components/propsprac.components'
// import ImagesSlider from './components/imageslider.components';
// import Slideshow from './components/slideshowimage.component';
import ShowTableData from './components/table.componets';

function App() {
  return (
    <div className="App">

      <ShowTableData />
      {/* <Slideshow />
      <ArrayShow />
      <ImagesSlider /> */}
      {/* <Pracprops/> */}

      {/* <Navbar /> */}
      {/* <Section1/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
