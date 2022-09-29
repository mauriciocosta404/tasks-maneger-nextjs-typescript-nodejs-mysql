import type { AppProps } from 'next/app';
import MainContainer from '../src/components/mainContentainer/MainContainer';
import { AuthProvider } from '../src/context/authContext';
import { TasksProvider } from '../src/context/tasksContext';
import { GlobalStyle } from '../styles/Global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <GlobalStyle/>
  <TasksProvider >
    <MainContainer>
        <Component {...pageProps} />
    </MainContainer>
  </TasksProvider>
    
  </>)
}
export default MyApp