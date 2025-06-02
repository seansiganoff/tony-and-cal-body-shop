
import './App.css';
import Home from '../Home/home'
import Nav from '../Nav/nav';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Photos from '../Photos/Photos';
import OurGuarantee from '../OurGuarantee/OurGuarantee';
import QuickQuote from '../QuickQuote/QuickQuote';
import Insurance from '../insurance/Insurance';

function App() {
  // const [closeReviews, setcloseReviews] = useState(true);

  // const onCloseReviewsTab = () => {
  //   setcloseReviews(!closeReviews);
  // }

  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photos' element={<Photos />} />
        <Route path='/quick-quote' element={<QuickQuote />} />
        <Route path='/warranty' element={<OurGuarantee />} />
        <Route path='/insurance-claim' element={<Insurance />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
