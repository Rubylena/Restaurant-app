import React from 'react'
import majordish from "./img/major_dish.jpg"
import "../../App.css"
import { Col, Container, Row } from 'react-bootstrap'
import spicy from './img/spicy.jpg'
import veggie from './img/veggie.jpg'
import yummy from './img/yummy.jpg'
import './aboutus.css'



const AboutUs = () => {
  return (
    <section className='ab-page'>
      <div className='about'>
      <img className='about_img' src={majordish} alt='About background'></img>
      </div>

    <Container fluid='md'>
      <Row md={8} className='ab-main'>
        <Col className='justify-content-center'>
        <h3>WHO WE ARE</h3>
        <p>Our vision is to povide friends and neighbors with the original form of social networking, a fun condusive restaurant to chill. We believe in providing exceptional quality product and friendly services in a clean and welcoming environment. This has earned our restaurant the most sort after in the area.</p>
        </Col>
      </Row>
      <Row className='ab-img hide'>
        <Col md={4}><img className='img_size' src={yummy} alt='About background'></img></Col>
        <Col md={4}><img className='img_size' src={spicy} alt='About background'></img> </Col>
        <Col md={4}><img className='img_size' src={veggie} alt='About background'></img></Col>
      </Row>
    </Container>
    </section>
  )
}

export default AboutUs