import type { AppProps } from 'next/app';
import MainContainer from '../src/components/mainContentainer/MainContainer';
import { AuthProvider } from '../src/context/authContext';
import { GlobalStyle } from '../styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <GlobalStyle/>
  <AuthProvider >
    <MainContainer>
        <Component {...pageProps} />
    </MainContainer>
  </AuthProvider>
    
  </>)
}
export default MyApp