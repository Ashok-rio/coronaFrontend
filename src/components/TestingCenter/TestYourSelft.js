import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Card, CardBody, Container, Form, Button } from "reactstrap";
import { FaCheck } from "react-icons/fa";
import './center.css';
import { toast } from 'react-toastify';
toast.configure();

class Reports extends Component {
  state = {
    fever: false,
    fatigue: false,
    dryCough: false,
    diarrhoea: false,
    soreThroat: false,
    achesAndPain: false,
    runnyNose: false,
    shortnessOfBreath: false,
  };

  toggleChangeFever = () => {
    this.setState((prevState) => ({
      fever: !prevState.fever,
    }));
  };

  toggleChangeFatigue = () => {
    this.setState((prevState) => ({
      fatigue: !prevState.fatigue,
    }));
  };

  toggleChangeDry = () => {
    this.setState((prevState) => ({
      dryCough: !prevState.dryCough,
    }));
  };

  toggleChangeDiarrhoea = () => {
    this.setState((prevState) => ({
      diarrhoea: !prevState.diarrhoea,
    }));
  };

  toggleChangesoreShroat = () => {
    this.setState((prevState) => ({
      soreThroat: !prevState.soreThroat,
    }));
  };

  toggleChangesoreAchesAndPain = () => {
    this.setState((prevState) => ({
      achesAndPain: !prevState.achesAndPain,
    }));
  };

  toggleChangesoreRunnyNose = () => {
    this.setState((prevState) => ({
      runnyNose: !prevState.runnyNose,
    }));
  };

  toggleChangesoreShortnessOfBreath = () => {
    this.setState((prevState) => ({
      shortnessOfBreath: !prevState.shortnessOfBreath,
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        arr.push(key);
      }
    }
    let data = {
      symptoms: arr,
    };
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios.post("http://localhost:8080/api/createReport", data,config)
      .then((res) => {
      if(res){
        toast.success('Sent Detail Succesfully !')
      }})
      .catch(err=>{ console.log(err) })
  };

  render() {
    return (
      <React.Fragment>

        <Card>
          <CardBody>
            <Row>
              <Col sm={12}>
                <h1>
                  <FaCheck size="1.5rem" color={"black"} />
                  &nbsp;&nbsp;MAKE YOUR SYMPTOMS IF ANY
                </h1>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col sm={12} className={'checkForm'}>
                <Container fluid={true}>
                <Form onSubmit={this.onSubmit}> 
                  <Row>
                    <Col sm={4}>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.fever}
                            onChange={this.toggleChangeFever}
                            className="form-check-input"
                          />
                          FEVER
                        </label>
                      </div>
                      <br />
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.fatigue}
                            onChange={this.toggleChangeFatigue}
                            className="form-check-input"
                          />
                          FATIGUE
                        </label>
                      </div>
                      <br />
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.dryCough}
                            onChange={this.toggleChangeDry}
                            className="form-check-input"
                          />
                          DRY COUGH
                        </label>
                      </div>
                      <br />
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.diarrhoea}
                            onChange={this.toggleChangeDiarrhoea}
                            className="form-check-input"
                          />
                          DIARRHOEA
                        </label>
                      </div>
                    </Col>
                    <Col sm={4}>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.soreThroat}
                            onChange={this.toggleChangesoreShroat}
                            className="form-check-input"
                          />
                          SORE THROAT
                        </label>
                      </div>
                      <br />
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.achesAndPain}
                            onChange={this.toggleChangesoreAchesAndPain}
                            className="form-check-input"
                          />
                          ACHES AND PAIN
                        </label>
                      </div>
                      <br />
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.runnyNose}
                            onChange={this.toggleChangesoreRunnyNose}
                            className="form-check-input"
                          />
                          RUNNY NOSE
                        </label>
                      </div>
                      <br />
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            checked={this.state.shortnessOfBreath}
                            onChange={this.toggleChangesoreShortnessOfBreath}
                            className="form-check-input"
                          />
                          SHORTNESS OF BREATH
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <br/>
                  <br/>
                  <Row>
                    <Col sm={4}>
                      <Button className={'sendDetailsReport'}>SEND DETAILS</Button>
                    </Col>
                  </Row>
                  </Form>
                </Container>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Reports;
