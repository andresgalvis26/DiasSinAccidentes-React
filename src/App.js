// import logo from './logo.svg';
import './App.css';
import Contador from './components/contador';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Contador sin Accidentes</title>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <header className="App-header">
      <meta name="title" content="Contador Días sin Accidentes - ReactJS"></meta>

        <Contador></Contador>
        
      </header>
    </div>
  );
}

export default App;
