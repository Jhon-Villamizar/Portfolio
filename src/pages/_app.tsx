// headers
import 'bootswatch/dist/litera/bootstrap.min.css';
import type { AppProps } from 'next/app'
import '/scss/custom.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
