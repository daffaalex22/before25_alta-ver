import './App.css';
import HomeAdmin from './pages/Admin/HomeAdmin/HomeAdmin';
import ArticleDetails from './components/ArticleDetails';
import NotFound from './pages/NotFound/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeAdmin />}></Route>
          <Route path="/articles/:id" element={<ArticleDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
