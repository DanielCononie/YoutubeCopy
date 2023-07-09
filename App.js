import Navbar from './Navbar';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-content'>
          <LeftContent />
          <RightContent />
      </div>
    </div>
  );
}

export default App;
