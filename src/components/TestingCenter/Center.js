import React from 'react';
import { Row, Col, Input, Form, FormGroup, Button } from "reactstrap";
import useForm from "../../hooks/useForm";
import axios from "axios";
import '../Hospital/hospital.css';

const Center = (props) => {

    const [values, handlerChange] = useForm();

  const createCenter = (e) => {
    e.preventDefault();
    console.log(values);
    let config = {
      headers: {
        Authorization: localStorage.usertoken,
      },
    };
    axios.post("http://localhost:8080/api/createCenter", values, config)
      .then((res) => {
        if (res.data._id !== "" && res.data._id !== undefined) {
          window.location = "/viewCenter";
        }
      })
      .catch((err) => console.log(err));
  };

    return (
        <React.Fragment>
            <Row>
        <Col sm={12} className={"createHospital"}>
          <h1>Add Center</h1>
        </Col>
        <Col sm={12} className={"createHospital4"}>
          <Form onSubmit={createCenter}>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <p>Test Center Name*</p>
                  <Input
                    type="text"
                    name="centerName"
                    value={values.centerName || ''}
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
                    value={values.state || ''}
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
                    value={values.district || ''}
                    className={"createHosInput"}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <p>Phone Number*</p>
                  <Input
                    type="number"
                    name="phone"
                    value={values.phone || ''}
                    className={"createHosInput"}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row form>
              <Col md={8}>
                <Button className={"addHosBtn"}> ADD CENTER</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
        </React.Fragment>
    )
}

export default Center
