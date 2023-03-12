
import './App.css';
//import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './component/header/Header';
import Home from './component/home/Home';
import { Box } from '@mui/system';

//import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
//import Header2 from './component/header/Header2';
function App() {
  return (
    <>
       {/* <Router>
    
   
        <Routes>
       <Route path='/' element={<Home/>}/>
        </Routes> 
    </Router>*/} 

    <Header/>
    <Box style={{marginTop:65}}>
    <Home/>
    </Box>
    
 
    
    </>
  );
}

export default App;
