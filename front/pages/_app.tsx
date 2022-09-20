import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/Global';
import MainContainer from '../src/components/mainContentainer/MainContainer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <GlobalStyle/>
   <MainContainer>
      <Component {...pageProps} />
   </MainContainer>
    
  </>)
}
export default MyApp