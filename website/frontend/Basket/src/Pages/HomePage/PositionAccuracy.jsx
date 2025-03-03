import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Ground from '../../assets/Images/Ground1.jpg'
import { Link } from 'react-router-dom';

const PositionAccuracy = () => {
  return (
    <div className='accurate-position' style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            {/* <span style={{color:"white",fontSize:"50px"}}>Is your posture is accurate</span><span><h1 style={{fontSize:"120px"}}>?</h1></span> */}
            <Container>
                <Row>
                <Col lg={5} style={{display:"flex",justifyContent:"center"}}>
                        <Card style={{ width: '18rem',backgroundColor:"black" }}>
                            <Card.Img variant="top" src={Ground} />
                        </Card>
                    </Col>
                    <Col lg={7} style={{marginTop:"50px"}}>
                        <div className='heading' style={{ color: "white", fontSize: "30px"}}> <span className='question-mark' style={{ fontSize: "70px" }}>Importance </span>of positons  </div>
                        <span style={{ color: 'white' }}>
                        Each position in basketball plays a vital role in the team's success. From the playmaking of the point guard to the dominance of the center, every position contributes to the team's offense, defense, and overall strategy. Understanding and mastering these roles is essential for building a cohesive and effective team.Click on below button to discover your <strong>position</strong>.                    </span>
                        <div style={{display:"flex",marginTop:"60px",justifyContent:"center"}}>

                        <Button as={Link} to="/questions" style={{backgroundColor:"#ea9215"}}>Click me</Button>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
  )
}

export default PositionAccuracy
