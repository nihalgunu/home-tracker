import React from 'react'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import './Information.css';

const Information = ({getHomeData, home, homes}) => {
    const revText= useRef();
    let params = useParams();
    const homeId = params.homeId;

    useEffect(()=>{
        getHomeData(homeId);
    },[])


  return (
    <Container>
        <Row>
            <Col>
                <h3>Information</h3>
            </Col>
        </Row>
        <Row className="mt-1">
            <Col className='image-holder'>
                <img src={home?.mainView} alt=""/>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>
                    Address: 
                </h4>
                <div>{home?.address}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>
                    Baths: 
                </h4>
                <div>{home?.baths}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>
                    Beds: 
                </h4>
                <div>{home?.bedrooms}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>
                    Square Space: 
                </h4>
                <div>{home?.squareSpace}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>
                    Valuation: 
                </h4>
                <div>{home?.value}</div>
            </Col>
        </Row>
        <Row>
            <Col>
                <h4>
                    Rent: 
                </h4>
                <div>{home?.rent}</div>
            </Col>
        </Row>
    </Container>
  )
}

export default Information