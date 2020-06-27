import React, { useState, useEffect } from "react";
import { Row, Col} from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";
import "../Hospital/hospital.css";
import { FaDotCircle } from "react-icons/fa";

const GetOneReport = () => {
  let { id } = useParams();

  const [reports, setreports] = useState({});

  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios
      .get(`http://localhost:8080/api/getOneReport/${id}`, config)
      .then((res) => setreports(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className={"createHospital"}>
          <h1>User Report</h1>
        </Col>
        <Col sm={12} className={"createHospital2"}>
          <Row>
            <Col sm={8} className={"createHospital5"}>
              <Row>
                <Col sm={2}>Name</Col>
                <Col sm={1}>:</Col>
                <Col sm={3}>{reports.name}</Col>
              </Row>
              <br />
              <Row>
                <Col sm={2}>Phone Number</Col>
                <Col sm={1}>:</Col>
                <Col sm={3}>{reports.phone}</Col>
              </Row>
              <br />
              <Row>
                <Col sm={2}>Email</Col>
                <Col sm={1}>:</Col>
                <Col sm={3}>{reports.email}</Col>
              </Row>
              <br />
              <Row>
                <Col sm={2}>Address</Col>
                <Col sm={1}>:</Col>
                <Col sm={3}>{reports.address}</Col>
              </Row>
              <br />
              <Row>
                <Col sm={2}>Syntomps</Col>
                <Col sm={1}>:</Col>
                <Col sm={4} className={"syntompsRow"}>
                  {reports.symptoms
                    ? reports.symptoms.map((x, i) => {
                        return (
                          <p key={i}>
                            <FaDotCircle size="1rem" color={"#18A4E0"} />
                            &nbsp;&nbsp;{x}
                          </p>
                        );
                      })
                    : null}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default GetOneReport;
