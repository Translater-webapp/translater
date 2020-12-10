import React from 'react'
import './aboutUs.css'
import {Button, Container, Row, Form, Col, Card} from 'react-bootstrap'
function AboutUs(props) {
  return (
    <div id="landing-page-app">
      <div className="landing-base" style={{opacity: 5}}>
        <Row>
          <Col>
            <div className="intro-title">
              <img
                src="/img/priscilla-du-preez-gYdjZzXNWlg-unsplash.jpg"
                alt="people chatting"
                className="chattingImg"
              />
            </div>
            <div className="text-box1">
              <div className="content text-center">
                <h1>A New Way to Communicate</h1>
                <p>
                  "Chatty-Polyglot allows you to communicate with your friends
                  that speaks different languages so much easier! "
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="text-box2">
              <div className="content text-center">
                <h1>Messages, Memes, Audios -- All in one app!</h1>
                <p>
                  "Chatty-Polyglot has made it so easy for me to talk to people
                  from different countries! ---Anonymous User"
                </p>
              </div>
            </div>
            <div>
              <img
                src="/img/christian-buehner-J3pLjxl5Z2M-unsplash.jpg"
                alt="people chatting"
                className="chattingImg"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AboutUs