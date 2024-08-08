import MainArea from './components/MainArea';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import { TableContextProvider } from './contexts/TableContext';

export default function App() {
  return (
    <TableContextProvider>
      <div className='layout'>
        <Nav />

        <SideBar />

        <MainArea />
      </div>
    </TableContextProvider>
  );
}
