import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import PositionImg from '../../assets/Images/positionImg.png'
import { Link } from 'react-router-dom';
import Kalubasket from '../../assets/Images/kalu.png'

const Faster = () => {
    return (
        <div className='accurate-position' style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
            {/* <span style={{color:"white",fontSize:"50px"}}>Is your posture is accurate</span><span><h1 style={{fontSize:"120px"}}>?</h1></span> */}
            <Container>
                <Row>
                    <Col lg={7} >
                        <div className='heading' style={{ color: "white", fontSize: "30px"}}>Want to learn faster  <span className='question-mark' style={{ fontSize: "70px" }}>!! </span> </div>
                        <span style={{ color: 'white' }}>
                        Learn Faster is an intelligent feature that helps users quickly find solutions by suggesting the most relevant video based on their query. Whether it's troubleshooting a problem or learning something new, this feature ensures you get the best video content tailored to your needs.Click on the below button to <strong>learn</strong>.                 </span>
                        <div style={{display:"flex",marginTop:"60px",justifyContent:"center"}}>

                        <Button as={Link} to="/recommend" style={{backgroundColor:"#ea9215"}}>Click me</Button>
                        </div>
                    </Col>
                    <Col lg={5} style={{display:"flex",justifyContent:"center"}}>
                        <Card style={{ width: '18rem',backgroundColor:"black" ,height:"300px"}}>
                            <Card.Img variant="top" src={Kalubasket} style={{height: "330px",
        width: "250px",marginTop:"-60px"}}/>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Faster;
