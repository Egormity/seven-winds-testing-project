import MainArea from './components/MainArea';
import Nav from './components/Nav';
import SideBar from './components/SideBar';

export default function App() {
  return (
    <div className='layout'>
      <Nav />

      <SideBar />

      <MainArea />
    </div>
  );
}
