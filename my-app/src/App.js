import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Upload from './Upload/Upload';
import { Nav } from './Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Upload />} />
            {/* <Route path='/showWorks' element={<Works />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
