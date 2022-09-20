import type { AppProps } from 'next/app';
import MainContainer from '../src/components/mainContentainer/MainContainer';
import { GlobalStyle } from '../styles/Global';

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