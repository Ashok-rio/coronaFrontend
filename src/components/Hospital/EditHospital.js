import React, { useState, useEffect } from "react";
import { Row, Col, Input, Form, FormGroup, Button } from "reactstrap";
import useForm from "../../hooks/useForm";
import { useParams } from "react-router";
import axios from "axios";

const EditHospital = () => {
  let { id } = useParams();

  const [values, handlerChange] = useForm();
  const [eHos, seteHos] = useState({});
  const hospitalId = eHos._id;

  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios
      .get(`http://localhost:8080/api/getOneHospital/${id}`, config)
      .then((res) => seteHos(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const editHospital = (e) => {
    e.preventDefault();
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios.put("http://localhost:8080/api/updateHospital", values, config)
      .then((res) => {
        if (res) {
          window.location = "/viewHospital";
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className={"createHospital"}>
          <h1>Edit Hospital</h1>
        </Col>
        <Col sm={12} className={"createHospital2"}>
          <Form onSubmit={editHospital}>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <p>Hospital Name*</p>
                  <Input
                    type="text"
                    name="hospitalName"
                    value={values.hospitalName}
                    onChange={handlerChange}
                    placeholder={eHos.hospitalName}
                    className={"createHosInput"}
                  />
                  <Input
                    type="text"
                    name="hospitalId"
                    value={values.hospitalId = hospitalId}
                    onChange={handlerChange}
                    className={"createHosInputId"}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <p>State*</p>
                  <Input
                    type="text"
                    name="state"
                    value={values.state}
                    className={"createHosInput"}
                    placeholder={eHos.state}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <p>District*</p>
                  <Input
                    type="text"
                    name="district"
                    value={values.district}
                    className={"createHosInput"}
                    placeholder={eHos.district}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <p>No Of Bets*</p>
                  <Input
                    type="text"
                    name="noOfBets"
                    value={values.noOfBets}
                    className={"createHosInput"}
                    placeholder={eHos.noOfBets}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <p>Phone Number*</p>
                  <Input
                    type="number"
                    name="phone"
                    value={values.phone}
                    className={"createHosInput"}
                    placeholder={eHos.phone}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row form>
              <Col md={8}>
                <Button className={"addHosBtn"}> EDIT HOSPITAL</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default EditHospital;
