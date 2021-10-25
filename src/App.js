import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      
<Nav />
<Banner/>

      <Row title = "NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
      <Row title = "Trending now" fetchUrl={request.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      <Row title = "Mystery" fetchUrl={request.fetchMystery}/>
      <Row title = "Sci Fi" fetchUrl={request.fetchSciFi}/>
      <Row title = "Western" fetchUrl={request.fetchWestern}/>
      <Row title = "Animation" fetchUrl={request.fetchAnimation}/>
      <Row title = "Documentaries" fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
