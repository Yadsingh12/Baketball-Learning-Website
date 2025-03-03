import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import SwiperCard from '../../Components/SwiperCard'

const AboutSection = () => {
  return (
    <div>
      <Container >
        <Row style={{display:"flex"}}>
            <Col lg={7}>
                <h1 className='headings'>
                  ABOUT
                </h1>
                <div style={{color:'white'}}>
                The Virtual Basketball Coach is an innovative, interactive web application designed to revolutionize how basketball players of all levels improve their game. Leveraging cutting-edge AI and machine learning technologies, the platform offers personalized coaching, detailed skill analysis, and tailored training content to help players reach their full potential. Key features include Machine Learning for Shooting Position Analysis, which evaluates and optimizes shooting techniques, and an Interactive Quiz-Based Player Assessment to identify strengths and areas for improvement. Additionally, the app helps players Discover Their Ideal Playing Position based on their skills and physical attributes. Training programs are structured into three phases—beginner, intermediate, and advanced—ensuring progressive development. The platform also provides separate injury analysis to help players train safely and avoid common basketball-related injuries. Whether you're just starting out or looking to refine your skills, the Virtual Basketball Coach is your ultimate digital training partner                </div>
            </Col>
            <Col lg={5} style={{display:'flex',justifySelf:"center",justifyContent:"center",alignItems:"center"}}>
                <SwiperCard/>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutSection
