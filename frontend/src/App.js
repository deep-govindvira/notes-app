import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import { Note } from './components/Note';
import { CreateNote } from './components/CreateNote';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/CreateNote' element={<CreateNote />} />
        <Route path='/Notes' element={<Notes />} />
        <Route path='/Note/:noteId' element={<Note />} />
      </Routes>
    </div>
  );
}

export default App;