import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import axios from "axios";
import "../Hospital/hospital.css";
import { FaArrowCircleRight } from 'react-icons/fa';

const Report = () => {
  const [report, setreport] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios
      .get(`http://localhost:8080/api/getAllReport`, config)
      .then((res) => setreport(res.data))
      .catch((err) => console.error(err));
  }, []);

  console.log(report);

  const reportRender = () => {
    return report.map((data, i) => {
      return (
        <React.Fragment key={i}>
          <Card className={"reportCard"}>
            <CardBody>
              <Row>
                <Col sm={10} className={"reportName"}>
                  Name : {data.name}
                </Col>
                <Col sm={2}><a href={`/report/${data._id}`}><FaArrowCircleRight size="2rem" color={'black'} /></a></Col>
              </Row>
            </CardBody>
          </Card>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className={"createHospital"}>
          <h1>User Report</h1>
        </Col>
        <Col sm={12} className={"createHospital2"}>
          <Row>
            <Col sm={7} className={"createHospital5"}>
              {reportRender()}
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Report;
