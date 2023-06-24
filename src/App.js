import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Information from './components/information/Information';

function App() {

  const[homes, setHomes] = useState();
  const[home, setHome] = useState();

  const getHomes = async () =>{
    try
    {
      
      const response = await api.get("/api/v1/homes");
      
      setHomes(response.data);

    }
    catch(err)
    {
      console.log(err);
    }
  }

  const getHomeData = async (homeId) => {
    try {
      const response = await api.get(`/api/v1/homes/${homeId}`)

      const singleHome = response.data;

      setHome(singleHome);

    } catch (err) {
      console.log(err);
    }
    
  }

  useEffect(()=> {
    getHomes();
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>  
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home homes={homes}/>}></Route>  
          <Route path="/:homeId" element ={<Information getHomeData = {getHomeData} home={home} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
