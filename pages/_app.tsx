import { AppProps } from 'next/app';
import '../styles.css'; // ou onde quer que esteja o seu arquivo CSS em relação a _app.tsx

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
