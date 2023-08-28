
import './App.css';
import Search from './Components/Search';
import Pagination from './Components/Pagination';
import Stories from './Components/Stories';

function App() {
  document.title = "Tech Website"
  return (
    <>
      <Search />
      <Pagination />
      <Stories />

    </>
  );
}

export default App;
