import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NoteInput from './components/NoteInput';
import AllNotes from './components/AllNotes';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <NoteInput />
          </div>
        </div>
        <div class="row">
          <div class="col-sm">
            <AllNotes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;