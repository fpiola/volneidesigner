import '@styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect } from 'react';
import { initGA, logPageView } from '../utils/ga';

function Application({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);
  return <Component {...pageProps} />
}

export default Application
