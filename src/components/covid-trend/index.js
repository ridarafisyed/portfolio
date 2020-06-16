import React from 'react';
import axios from 'axios';

//local files import here
import ValueContext from './ValueContext';
import Cards from './cards/Cards';
import Map from './maps/Map';
import RadialBar from './charts/RadialBar';
import Header from './header/Header'
import Splinearea from './charts/Splinearea';
import SearchCountry from './searchCountry/SearchCountry';
import CovidFooter from './footer/covidFooter';
import {Footer} from '../static_pages/Footer';

import './Covid19.css';

//style related import here 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';



// covid-19 app 
export default function Covid19() {
    const [count, setCount] = React.useState(0);
    console.log(count);
   // Api data states
    const [latest, setLatest] = React.useState([]);
    const [countryData, setCountryData] = React.useState([]);
    
    //fatching data from api using useEffect and axios.
    React.useEffect(() => {
      
        axios
        .all([
            axios.get("https://corona.lmao.ninja/v2/all"),
            axios.get("https://corona.lmao.ninja/v2/countries")
        ])
        .then(res => {
          setLatest(res[0].data);
          setCountryData(res[1].data);
          
          })
        .catch(err =>{
        
        })
        setCount(1);
    }, []);
  
    return (
        
        <ValueContext.Provider value={{country:countryData, latest:latest}}>
            <Container className='bg-header-text'>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            </Container>
            <Container className='bg-header-text'>
            <Row >
                <Col>
                    <Cards/>
                </Col>
            </Row>
            <Row>
                <Col sm={8}>                    
                    <Map/>
                </Col>
                <Col sm={4}>
                    <RadialBar/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Splinearea/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SearchCountry/>
                </Col>
            </Row>
            </Container><Container>
            <Row>
                <Col className='bg-header-text'>
                    <CovidFooter/>
                </Col>
            </Row>
            
        </Container>
        <Footer/>
        </ValueContext.Provider>
    );
}


 