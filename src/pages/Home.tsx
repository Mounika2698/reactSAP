import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Header from "../components/Header";
import ResultPage from "../components/ResultPage";

const Home = () => {
    return (
        <>
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/result" element={<ResultPage />} />
       </Routes>
       </BrowserRouter>
      
        </>
    )
}

export default Home;