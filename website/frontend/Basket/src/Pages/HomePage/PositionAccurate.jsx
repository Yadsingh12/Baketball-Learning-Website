import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import PositionImg from '../../assets/Images/positionImg.png'
import { Link } from 'react-router-dom';

const PositionAccurate = () => {
    return (
        <div className='accurate-position' style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            {/* <span style={{color:"white",fontSize:"50px"}}>Is your posture is accurate</span><span><h1 style={{fontSize:"120px"}}>?</h1></span> */}
            <Container>
                <Row>
                    <Col lg={7} >
                        <div className='heading' style={{ color: "white", fontSize: "30px"}}>Is your posture is accurate <span className='question-mark' style={{ fontSize: "70px" }}>? </span> </div>
                        <span style={{ color: 'white' }}>
                        Shooting posture is the foundation of a great shooter. It impacts accuracy, consistency, power, and overall performance. By focusing on proper posture, players can improve their shooting mechanics, reduce injuries, and become more confident and effective on the court. Whether you're a beginner or an experienced player, refining your shooting posture is essential for success in basketball. So click on the below button to discover your <strong> Posture </strong>                    </span>
                        <div style={{display:"flex",marginTop:"60px",justifyContent:"center"}}>

                        <Button as={Link} to="/uploadvideo" style={{backgroundColor:"#ea9215"}}>Click me</Button>
                        </div>
                    </Col>
                    <Col lg={5} style={{display:"flex",justifyContent:"center"}}>
                        <Card style={{ width: '18rem',backgroundColor:"black" }}>
                            <Card.Img variant="top" src={PositionImg} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PositionAccurate
