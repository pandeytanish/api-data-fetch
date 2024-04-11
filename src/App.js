import './App.css';
import  {Routes , Route} from 'react-router-dom'
import Datamovie from './Components/Url/Home'
import DataMoveRou from './Components/Url/Redirect'




function App() {
  
  // const [url,setUrl]=useState()
  // const [data,setData]=useState()
  // useEffect(()=>{
  //   fetch(url)
  //   .then(response => response.json())
  //   .then(json => setData(json))
  // },[url]
  
  return  (
<>
 <Routes>
 <Route path="/" element={<Datamovie/>} />
<Route path="data/:id" element={<DataMoveRou/>}/>
 </Routes>
</>
    )
}

export default App;
