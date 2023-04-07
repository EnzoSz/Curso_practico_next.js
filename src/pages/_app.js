import '../styles/globals.css';
import  Header  from '../components/Header.jsx';
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState.js';
function App({ Component, pageProps }) {
  const initialState = useInitialState();
  
  return (
    <AppContext.Provider value={initialState}>
      <Header/>
      <Component {...pageProps} />
    </AppContext.Provider>
    
  );
}

export default App;