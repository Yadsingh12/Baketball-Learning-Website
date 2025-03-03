import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Video from '../../assets/Video/Video.mp4'

const IntroSection = () => {
  return (
    <div className='firstPage'>
    <Container className='front' style={{minHeight:"90vh",display:"flex"}}>
      <Row>
        <Col lg={7} style={{display:"flex",flexDirection:'column',justifyContent:'center'}}>
          <h1>
            Basket
          </h1>
          <p>
          Welcome to <strong><i>BASKET</i></strong> your slam dunk into the world of basketball mastery! Whether you're just stepping onto the court or looking to level up your game, we’ve got your back. Our cutting-edge AI tech fine-tunes your shooting form, breaks down every position on the court, and tailors training to your unique style. From beginner basics to pro-level strategies, we’ve got drills, tips, and real-time feedback to fuel your growth. Lace up, grab the ball, and let’s turn your potential into performance. Ready to dominate the game? Let’s get started—your journey to becoming a basketball star begins here!
          </p>
        </Col>
        <Col lg={5} style={{display:"flex",justifySelf:"center"}}>
        {/* <model-viewer src={Court}>

        </model-viewer> */}
        <video className='video-intro-page' autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
          {/* <img src={Img}>
          </img> */}
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default IntroSection;
