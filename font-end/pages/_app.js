import { Provider } from 'react-redux';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}

export default MyApp;
