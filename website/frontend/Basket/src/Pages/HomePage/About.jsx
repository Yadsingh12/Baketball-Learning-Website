import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Basket from '../../assets/Images/BasketPNG.png'
import Beginner from '../../assets/Images/BeginnerImg.png'
import Intermediate from '../../assets/Images/IntermediateImg.png'
import Advance from '../../assets/Images/AdvanceImg.png'
import { Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();


    return (
        <div>
            <Container >
                <Row style={{ display: "flex" }}>
                    <Col lg={6}>

                        {/* <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",  // Two columns
                            gridTemplateRows: "repeat(3, auto)", // Three rows
                            gap: "20px",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "300px"
                        }}>
                            <div style={{
                                gridColumn: "1",
                                gridRow: "1",
                                backgroundColor: 'green',
                                width: "170px",
                                height: "170px",  // Set the card size
                                left: "60px"
                            }} className="card">
                                <img className='Picture' src={Beginner} style={{ width: "80%", height: "80%" }} />
                                <h4 style={{textAlign:"center"}}>BEGINNER</h4>
                            </div>

                            <div style={{
                                gridColumn: "2",
                                gridRow: "2",
                                backgroundColor: 'yellow',
                                width: "170px",
                                height: "170px",
                                marginTop: "-70px"
                            }} className="card">
                                <img className='Picture' src={Intermediate} style={{ width: "100%", height: "100%" }} />
                            </div>

                            <div style={{
                                gridColumn: "1",
                                gridRow: "3",
                                backgroundColor: 'red',
                                width: "170px",
                                height: "170px",
                                marginTop: "-70px",
                                left: "60px"
                            }} className="card">
                                <img className='Picture' src={Advance} style={{ width: "100%", height: "100%" }} />
                            </div>
                        </div> */}


<div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",  // Two columns
    gridTemplateRows: "repeat(3, auto)", // Three rows
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    height: "300px"
}}>
    <div style={{
        gridColumn: "1",
        gridRow: "1",
        backgroundColor: '#2abd2a',
        width: "170px",
        height: "200px",
        display: "flex",               // Enable Flexbox
        flexDirection: "column",        // Stack items vertically
        alignItems: "center",           // Center horizontally
        justifyContent: "center",       // Center vertically
        textAlign: "center",             // Align text centrally
        left:"50px"
    }} className="card" onClick={() => navigate("/beginner")}>
        <img className='Picture' src={Beginner} style={{ width: "80%", height: "auto", display: "block" }} />
        <h4 style={{color:"white"}}>BEGINNER</h4>
    </div>

    <div style={{
        gridColumn: "2",
        gridRow: "2",
        backgroundColor: '#ea9215',
        width: "180px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-70px",
    }} className="card" onClick={() => navigate("/intermediate")}>
        <img className='Picture' src={Intermediate} style={{ width: "80%", height: "auto", display: "block" }} />
        <h4 style={{color:"black"}}>INTERMEDIATE</h4>
    </div>

    <div style={{
        gridColumn: "1",
        gridRow: "3",
        backgroundColor: 'rgb(224 38 38)',
        width: "170px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-70px",
        left:"50px"
    }} className="card" onClick={() => navigate("/advance")}>
        <img className='Picture' src={Advance} style={{ width: "80%", height: "auto", display: "block"}} />
        <h4 style={{color:"white"}}>ADVANCE</h4>
    </div>
</div>




                        {/* <div style={{ color: 'white' }}>

                      </div> */}
                    </Col>
                    <Col lg={6} style={{ display: 'flex', flexDirection: 'column' }}>
                        <h1 className='headings' style={{ fontSize: "80px", lineHeight: "1" }}>Let's</h1>
                        <h1 style={{
                            color: "white",
                            fontSize: "100px",
                            fontWeight: "bold",
                            marginTop: "-20px", /* Pulls TRAIN closer */
                            letterSpacing: "2px"
                        }}>
                            TRAIN
                        </h1>
                        <img src='src/assets/Images/img.png' style={{ marginTop: "-190px", marginLeft: "90px" }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
