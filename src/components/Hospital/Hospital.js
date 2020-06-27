import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, Container } from "reactstrap";
import "./hospital.css";
import axios from "axios";

const Hospital = () => {
  const [hospital, setHospital] = useState([]);
  const [center, setCenter] = useState([]);

  useEffect(() => {
    let token = localStorage.usertoken;
    let config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get("http://localhost:8080/api/getAllHospital", config)
      .then((res) => setHospital(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let token = localStorage.usertoken;
    let config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .get("http://localhost:8080/api/getAllCenter", config)
      .then((res) => setCenter(res.data))
      .catch((err) => console.error(err));
  }, []);

  const hospitals = () => {
    return hospital.map((data, i) => {
      return (
        <React.Fragment key={i}>
          <Col sm={6} className={"image"}>
            <a href={"/viewHospital"}>
              <img
                src={"https://bit.ly/36uP1Xj"}
                alt={""}
                className={"hospitalImage"}
              />
              <p className={"imageText"}>
                {data.hospitalName}
                <br />
                PH: {data.phone}
              </p>
            </a>
          </Col>
        </React.Fragment>
      );
    });
  };

  const centers = () => {
    return center.map((data, i) => {
      return (
        <React.Fragment key={i}>
          <Col sm={6} className={"image"}>
            <a href={"/viewCenter"}>
              <img
                src={"https://bit.ly/36uP1Xj"}
                alt={""}
                className={"hospitalImage"}
              />
              <p className={"imageText"}>
                {data.centerName} <br />
                PH: {data.phone}
              </p>
            </a>
          </Col>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card className={"yourHospital"}>
              <CardBody>
                <p className={"yourText"}>Your Hospital</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>{hospitals()}</Row>
      </Container>
      <br />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card className={"yourHospital"}>
              <CardBody>
                <p className={"yourText"}>Your Testing Center</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>{centers()}</Row>
      </Container>
    </React.Fragment>
  );
};

export default Hospital;
