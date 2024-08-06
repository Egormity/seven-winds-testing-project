import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainArea from './components/MainArea';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TableContextProvider } from './contexts/TableContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000
      staleTime: 1 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TableContextProvider>
        <ReactQueryDevtools />
        <div className='layout'>
          <Nav />

          <SideBar />

          <MainArea />
        </div>
      </TableContextProvider>
    </QueryClientProvider>
  );
}
