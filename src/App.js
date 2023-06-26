import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import Footer from './Components/Footer/Footer';
import { actionMovies, netflixOrginals, comedyMovies, horrorMovies, romanticMovies, documentaries } from './url';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title='Netflix Orginals' url={netflixOrginals} />
      <RowPost title='Action' url={actionMovies} />
      <RowPost title='Comedy' url={comedyMovies} />
      <RowPost title='Horror' url={horrorMovies} />
      {/* <RowPost title='Romance' url={romanticMovies} />
      <RowPost title='Documentaries' url={documentaries} /> */}
      <Footer />
    </div>
  );
}

export default App;
