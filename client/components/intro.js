import React from 'react'
import {Container, Jumbotron, Row, Col} from 'react-bootstrap'
import './intro.css'
function Intro(props) {
  return (
    <div>
      <Jumbotron fluid style={{backgroundColor: 'yellow'}}>
        <Container>
          <Row className="justify-content-md-center">
            <h1 className="introHeader">Why this website is built</h1>
          </Row>
          <Row className="justify-content-md-center">
            <p className="introP">
              This website is established to serve 2 purposes:
            </p>
          </Row>
        </Container>
      </Jumbotron>
      <Row>
        <p className="introHeader">
          For fun. I am waiting to know whether an 20k investment in bootcamp is
          better or a 20k investment in bitcoin/TSLA is better?
        </p>
      </Row>
      <Row>
        <p className="introHeader">
          To provide resource for bootcamp graduates to help each other.
        </p>
      </Row>
      <Row>
        <p className="introHeader">Contact me at jiangtianying0602@gmail.com</p>
      </Row>
    </div>
  )
}

export default Intro
