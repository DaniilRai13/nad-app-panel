import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Upload from './Upload/Upload';
import { Nav } from './Nav/Nav';
import Works from './Works/Works';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <main className=''>
          <Routes>
            <Route path='/uploadImg' element={<Upload />} />
            <Route path='/showWorks' element={<Works />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
