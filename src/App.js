import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BookList';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import books from './data/fantasy.json'

function App() {
  return (
    <div className="App">
      <WarningSign  text="Questo è un allert"/>
      <MyBadge text="Questo è un badge" color="primary" />
     <BookList books={books}/>
    </div>
  );
}

export default App;
