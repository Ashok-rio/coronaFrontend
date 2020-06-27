import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "reactstrap";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import "../Hospital/hospital.css";
import jwt_decode from "jwt-decode";

const GetCenter = () => {
  let token = localStorage.usertoken;
  let decode = jwt_decode(token);
  let admin = "admin@gmail.com";

  const [OneCenter, setOneCenter] = useState([]);

  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios
      .get(`http://localhost:8080/api/getAllCenter`, config)
      .then((res) => setOneCenter(res.data))
      .catch((err) => console.error(err));
  }, []);

  const centerAll = () => {
    return OneCenter.map((data, i) => {
      return (
        <React.Fragment key={i}>
          <Col sm={3} className={"imageAll"}>
            <a href={`/viewCenter/${data._id}`}>
              <img
                src={"https://bit.ly/36uP1Xj"}
                alt={""}
                className={"hospitalImageAll"}
              />
              <p className={"imageTextAll"}>
                {data.centerName}
                <br />
                PH: {data.phone}
              </p>
            </a>
            {decode.email === admin?
            <React.Fragment>
            <Button
              className={"xCancel"}
              value={data._id}
              onClick={() => {
                axios
                  .post(
                    `http://localhost:8080/api/deleteCenter`,
                    { centerId: data._id },
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
            <Button className={"eEdit"} href={`/editCenter/${data._id}`}>
              <FaEdit size="1rem" color={"black"} />
            </Button>
            </React.Fragment>:null}
          </Col>
        </React.Fragment>
      );
    });
  };
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className={"createHospital"}>
          <h1>View Centers</h1>
        </Col>
        <Col sm={12} className={"createHospital2"}>
          <Row>{centerAll()}</Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default GetCenter;
