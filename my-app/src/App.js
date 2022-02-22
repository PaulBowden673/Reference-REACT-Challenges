import css from './App.module.css';
import NavBarSimple from './components/NavBarSimple';
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <Sidebar />
      <NavBarSimple />
    </div>
  );
}

export default App;