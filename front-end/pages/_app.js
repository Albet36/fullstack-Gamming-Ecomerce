import { Provider } from "react-redux";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import store from "../redux/store";
import "../styles/globals.css";
import  MainLayout  from "../components/layouts/MainLayout";
import  AuthLayout  from "../components/layouts/AuthLayout";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router?.pathname;
  if (path.startsWith("/auth")) {
    return (
      <Provider store={store}>
      <AuthLayout>   
      <div className="wrapper">
            <Component {...pageProps} /> 
      </div>
      </AuthLayout>
      </Provider>   
    );
  } else {
    return (
      <Provider store={store}>
      <MainLayout>
          <div className="wrapper">
          
            <Component {...pageProps} />
        
          </div>
          </MainLayout>
          </Provider>
    );
  }
}

export default MyApp;
