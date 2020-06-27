import React from "react";
import { Row, Col, Input, Form, FormGroup, Button } from "reactstrap";
import useForm from "../../hooks/useForm";
import axios from "axios";

const CreateHospital = () => {

  const [values, handlerChange] = useForm();

  const createHospital = (e) => {
    e.preventDefault();
    console.log(values);
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios.post("http://localhost:8080/api/createHospital", values, config)
      .then((res) => {
        if (res.data._id !== "" && res.data._id !== undefined) {
          window.location = "/viewHospital";
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <Row>
        <Col sm={12} className={"createHospital"}>
          <h1>Add Hospital</h1>
        </Col>
        <Col sm={12} className={"createHospital2"}>
          <Form onSubmit={createHospital}>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <p>Hospital Name*</p>
                  <Input
                    type="text"
                    name="hospitalName"
                    value={values.hospitalName || ""}
                    onChange={handlerChange}
                    className={"createHosInput"}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <p>State*</p>
                  <Input
                    type="text"
                    name="state"
                    value={values.state || ""}
                    className={"createHosInput"}
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
                    value={values.district || ""}
                    className={"createHosInput"}
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
                    value={values.noOfBets || ""}
                    className={"createHosInput"}
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
                    type="text"
                    name="phone"
                    value={values.phone || ""}
                    className={"createHosInput"}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row form>
              <Col md={8}>
                <Button className={"addHosBtn"}> ADD HOSPITAL</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CreateHospital;
