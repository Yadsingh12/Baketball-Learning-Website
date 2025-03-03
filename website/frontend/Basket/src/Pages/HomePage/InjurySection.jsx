import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import PlusSign from '../../assets/Images/plusSign.png'
import { Link } from 'react-router-dom';

const InjurySection = () => {
  return (
    <div className='accurate-position' style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            {/* <span style={{color:"white",fontSize:"50px"}}>Is your posture is accurate</span><span><h1 style={{fontSize:"120px"}}>?</h1></span> */}
            <Container>
                <Row>
                <Col lg={5} style={{display:"flex",justifyContent:"center",marginTop:"-70px",marginLeft:"-30px"}}>
                        <Card style={{ width: '18rem',backgroundColor:"black" }}>
                            <Card.Img variant="top" src={PlusSign} />
                        </Card>
                    </Col>
                    <Col lg={7} style={{marginTop:"-100px"}}>
                        <div className='heading' style={{ color: "white", fontSize: "30px"}}> <span className='question-mark' style={{ fontSize: "70px" }}>Injury </span>during basketball playing  </div>
                        <span style={{ color: 'white' }}>
                        Basketball is a high-intensity sport that involves quick movements, jumps, and physical contact, making players prone to injuries. Understanding common basketball injuries, their causes, and prevention strategies is crucial for players, coaches, and fans. Our Injuries Page provides detailed information on common basketball injuries, such as ankle sprains, knee injuries, and muscle strains, along with tips on prevention, treatment, and rehabilitation. Stay informed and play safe!
                        </span>
                        <div style={{display:"flex",marginTop:"60px",justifyContent:"center"}}>

                        <Button as={Link} to="/injury" style={{backgroundColor:"#ea9215"}}>Click me</Button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
  )
}

export default InjurySection;

