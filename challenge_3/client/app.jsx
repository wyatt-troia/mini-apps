import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Keypad from "./Keypad.jsx";
import Scorecard from "./Scorecard.jsx";

const generateInitialState = () => {
  let pinsHit = [];
  for (let i = 0; i < 10; i++) {
    pinsHit.push([]);
  }
  return {
    frame: 0,
    ball: 0,
    pinsLeftInFrame: 10,
    pinsHit,
    flatPinsHit: [],
    score: [],
    activeGame: true
  };
};

let initialState = generateInitialState();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState(initialState);
  }

  handleClick(pinsHit) {
    console.log(
      `Frame ${this.state.frame} ball ${this.state.ball} with ${
        this.state.pinsLeftInFrame
      } pins left: ${pinsHit} pins hit `
    );

    let pinsLeftInFrame = this.state.pinsLeftInFrame - pinsHit;
    if (pinsLeftInFrame < 0) {
      alert("There aren't that many pins left standing. Try again.");
      return;
    }

    let newPinsHit = [];
    this.state.pinsHit.forEach(frame => newPinsHit.push(frame.slice()));
    newPinsHit[this.state.frame][this.state.ball] = pinsHit;
    let flatPinsHit = this.state.flatPinsHit.slice();
    flatPinsHit.push(pinsHit);

    let newScore = this.state.score.slice();
    for (let frame = 0; frame < 10; frame++) {
      let score;
      let firstNextBall;
      let secondNextBall;
      // handle strikes
      if (newPinsHit[frame][0] === 10) {
        if (frame === 9) {
          firstNextBall = newPinsHit[frame][1];
          secondNextBall = newPinsHit[frame][2];
        } else if (frame === 8) {
          firstNextBall = newPinsHit[frame + 1][0];
          secondNextBall = newPinsHit[frame + 1][1];
        } else {
          firstNextBall = newPinsHit[frame + 1][0];
          secondNextBall = newPinsHit[frame + 1][1] || newPinsHit[frame + 2][0];
        }

        if (firstNextBall && secondNextBall)
          score = 10 + firstNextBall + secondNextBall;
        // handle spares
      } else if (newPinsHit[frame][0] + newPinsHit[frame][1] === 10) {
        if (frame === 9) {
          firstNextBall = newPinsHit[frame][2];
        } else firstNextBall = newPinsHit[frame + 1][0];
        if (firstNextBall) score = 10 + firstNextBall;
        // handle open frames
      } else {
        score = newPinsHit[frame][0] + newPinsHit[frame][1];
      }
      let previousScore = newScore[frame - 1] || 0;
      newScore[frame] = previousScore + score;
    }

    let newPinsLeft = this.state.pinsLeftInFrame - pinsHit;
    if (this.state.frame === 9) {
      if (this.state.ball === 0) {
        this.setState((state, props) => ({
          pinsHit: newPinsHit,
          frame: state.frame,
          ball: this.state.ball + 1,
          pinsLeftInFrame: newPinsLeft === 0 ? 10 : newPinsLeft,
          score: newScore
        }));
      } else if (this.state.ball === 1) {
        this.setState((state, props) => ({
          pinsHit: newPinsHit,
          frame: state.frame,
          ball: this.state.ball + 1,
          pinsLeftInFrame: newPinsLeft === 0 ? 10 : newPinsLeft,
          score: newScore,
          activeGame: newPinsHit === 0 ? true : false
        }));
      } else {
        this.setState((state, props) => ({
          pinsHit: newPinsHit,
          frame: state.frame,
          ball: this.state.ball + 1,
          pinsLeftInFrame: newPinsLeft === 0 ? 10 : newPinsLeft,
          score: newScore,
          activeGame: false
        }));
      }
    } else if (this.state.ball === 0 && pinsLeftInFrame > 0) {
      this.setState((state, props) => ({
        pinsHit: newPinsHit,
        ball: state.ball + 1,
        pinsLeftInFrame:
          state.frame === 9 && state.ball === 2
            ? 10
            : state.pinsLeftInFrame - pinsHit,
        score: newScore
      }));
    } else {
      this.setState((state, props) => ({
        pinsHit: newPinsHit,
        frame: state.frame + 1,
        ball: 0,
        pinsLeftInFrame: 10,
        score: newScore
      }));
    }
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <h1>Bowling Scoresheet</h1>
        </Row>
        <Row className="justify-content-center">
          <Col xs={5}>
            <Keypad handleClick={this.handleClick} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Scorecard pinsHit={this.state.pinsHit} score={this.state.score} />
        </Row>
        <Row className="justify-content-center">
          <button onClick={() => this.reset()}>Reset</button>
        </Row>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
