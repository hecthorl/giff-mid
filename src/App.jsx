import { useEffect } from 'react';
import { Link, Route } from 'wouter';
import Home from './pages/Home';
import Detail from './pages/Detail';
import SearchResults from './pages/SearchResults';
import { GifsContexProvider } from './context/GifsContex';
import './App.css';

const App = () => {
   useEffect(() => {
      document.title = 'Home - Gifhy del rulos';
   }, []);

   return (
      <div className="App">
         <section className="App-header">
            <Link to="/">
               <h1 id="asdasdasd" style={{ cursor: 'pointer' }}>
                  My App xd
               </h1>
            </Link>
            <GifsContexProvider>
               <Route component={Home} path="/" />
               <Route path="/search/:keyword" component={SearchResults} />
               <Route path="/gif/:id" component={Detail} />
            </GifsContexProvider>
         </section>
      </div>
   );
};

export default App;
