import '@styles/globals.css'
const { library } = require('@fortawesome/fontawesome-svg-core');
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
