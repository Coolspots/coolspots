import '../styles/globals.scss';
import { AuthProvider } from '../contexts/AuthContext';

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default App;
