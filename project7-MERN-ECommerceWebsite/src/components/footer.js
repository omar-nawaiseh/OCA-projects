import { Container, Row, Col, Jumbotron, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './footer.css';




class Footer extends Component {

        render(){

            return(
        <Jumbotron style={{backgroundColor:'#4A707A'}}>
            <Container style={{color:'#DDDDDA'}}>
                    
           
                <Row>
                  <Col><h5 id="footer-h5"  >About US</h5></Col>
                 
                  <Col><h5 id="footer-h5">Contact US</h5></Col>
             
                  <Col><h5 id="footer-h5">Social Media</h5></Col>
               
                  
                </Row>
                <Row>
                  <Col id="footer-p">Arts</Col>
                  <Col id="footer-p">Contact</Col>
                  
                  <Col id="footer-p">Instagram</Col>
                </Row>
                <Row>
                  <Col id="footer-p">Paint Art</Col>
                  <Col id="footer-p">Support</Col>
                 
                  <Col id="footer-p">Facebook</Col>
                </Row>
                <Row>
                  <Col id="footer-p">Careers</Col>
                  <Col id="footer-p">Destination</Col>
                  
                  <Col id="footer-p">Youtube</Col>
                </Row>
                <Row>
                  <Col id="footer-p">Investors</Col>
                  <Col id="footer-p">Sponsorship</Col>
                  
                  <Col id="footer-p">Twitter</Col>
                </Row>
            </Container>
        <div className="Footer-end">
            <hr style={{marginTop:'20px', backgroundColor:'#DDDDDA'}}></hr>
            <center><div className="footer-center" style={{marginTop:'30px'}}>
            <p id="footer-p" style={{color:'#DDDDDA'}}>MaHLeE © All rights reserved</p>  
            </div></center>  
         
            </div>
           
        </Jumbotron>
      

            )
        }
}

export default Footer;
