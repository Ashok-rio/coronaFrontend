import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import "./hospital.css";
import jwt_decode from "jwt-decode";

const GetHospital = () => {
  let token = localStorage.usertoken;
  let decode = jwt_decode(token);
  let admin = "admin@gmail.com";
  const [OneHos, setOneHos] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios
      .get(`http://localhost:8080/api/getAllHospital`, config)
      .then((res) => setOneHos(res.data))
      .catch((err) => console.error(err));
  }, []);

  const hospitalAll = () => {
    return OneHos.map((data, i) => {
      return (
        <React.Fragment key={i}>
          <Col sm={3} className={"imageAll"}>
            <a href={`/viewHospital/${data._id}`}>
              <img
                src={"https://bit.ly/36uP1Xj"}
                alt={""}
                className={"hospitalImageAll"}
              />
              <p className={"imageTextAll"}>
                {data.hospitalName}
                <br />
                PH: {data.phone}
              </p>
            </a>
            {decode.email === admin ? (
              <React.Fragment>
                <Button
                  className={"xCancel"}
                  value={data._id}
                  onClick={(e) => {
                    axios
                      .post(
                        `http://localhost:8080/api/deleteHospital`,
                        { hospitalId: data._id },
                        {
                          headers: {
                            Authorization: localStorage.usertoken,
                          },
                        }
                      )
                      .then((res) => {
                        console.log(res);
                        window.location.reload(true);
                      })
                      .catch((err) => console.error(err));
                  }}
                >
                  x
                </Button>
                <Button className={"eEdit"} href={`/editHospital/${data._id}`}>
                  <FaEdit size="1rem" color={"black"} />
                </Button>
              </React.Fragment>
            ) : null}
          </Col>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className={"createHospital"}>
          <h1>View Hospital</h1>
        </Col>
        <Col sm={12} className={"createHospital2"}>
          <Row>{hospitalAll()}</Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default GetHospital;
