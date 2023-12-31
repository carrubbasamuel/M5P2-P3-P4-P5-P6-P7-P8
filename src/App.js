import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';


import DetailsPage from './Pages/DetailsPage/detailspage';
import Error404 from './Pages/ErrorPage/404error';
import Home from './Pages/Home/home';





function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/404notfound" element={<Error404 />} />
        <Route path="/book/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
