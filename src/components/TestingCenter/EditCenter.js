import React, { useState, useEffect } from "react";
import { Row, Col, Input, Form, FormGroup, Button } from "reactstrap";
import useForm from "../../hooks/useForm";
import { useParams } from "react-router";
import axios from "axios";
import '../Hospital/hospital.css';

const  EditCenter = () =>{

    let { id } = useParams();

    const [values, handlerChange] = useForm();
    const [eCenter, seteCenter] = useState({});
    const centerId = eCenter._id;
  
    useEffect(() => {
      let config = {
        headers: {
          Authorization: localStorage.usertoken,
        },
      };
      axios
        .get(`http://localhost:8080/api/getOneCenter/${id}`, config)
        .then((res) => seteCenter(res.data))
        .catch((err) => console.error(err));
    }, [id]);
  
    const editCenter = (e) => {
      e.preventDefault();
      let config = {
        headers: {
          Authorization: localStorage.usertoken,
        },
      };
      axios.put("http://localhost:8080/api/updateCenter", values, config)
        .then((res) => {
          if (res) {
            window.location = "/viewCenter";
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
          <Form onSubmit={editCenter}>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <p>Center Name*</p>
                  <Input
                    type="text"
                    name="hospitalName"
                    value={values.centerName}
                    onChange={handlerChange}
                    placeholder={eCenter.centerName}
                    className={"createHosInput"}
                  />
                  <Input
                    type="text"
                    name="hospitalId"
                    value={values.centerId = centerId}
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
                    placeholder={eCenter.state}
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
                    placeholder={eCenter.district}
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
                    value={values.phone}
                    className={"createHosInput"}
                    placeholder={eCenter.phone}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row form>
              <Col md={8}>
                <Button className={"addHosBtn"}> EDIT CENTER</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
        </React.Fragment>
    )
}

export default EditCenter
