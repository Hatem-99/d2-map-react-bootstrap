import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter  from './components/MyFooter';
import Welcome from './components/Welcome';
import LatestReleases from './components/LatestRelease';

function App() {
  return (
    <div className="App bg-dark">
      <MyNav/>
      <Welcome/>
      <LatestReleases/>
      <MyFooter/>
    </div>
  );
}

export default App;
