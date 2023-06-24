import React from 'react';
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Hero = ({homes}) => {
  
   const navigate = useNavigate(); 

  function information(homeId){
    navigate(`/${homeId}`);
  }  
  return (
    <div className='home-caraousel-container'>
        <Carousel>  
            {
                homes?.map((home)=>{
                    return(
                        <Paper> 
                            <div className='home-card-container'>
                                <div className='home-card'>   
                                    <div className='home-detail'>   
                                        <div className='home-mainView'>
                                            <img src={home.mainView} alt=" "/>
                                        </div>
                                        <div className='home-address'>   
                                            <h4>{home.address}</h4>
                                        </div>
                                        <div className="home-information-button-container">
                                            <Button variant = "info" onClick={() => information(home.homeId)} >Information</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero