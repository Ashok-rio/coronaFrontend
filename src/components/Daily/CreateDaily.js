import React, { useState, useEffect } from "react";
import { Row, Col, Input, Form, FormGroup, Button } from "reactstrap";
import useForm from "../../hooks/useForm";
import axios from "axios";
import '../Hospital/hospital.css';


const CreateDaily = () => {
    const [values, handlerChange] = useForm();
    const [dailys,setdailys] = useState({});
    let dailyId = dailys._id;
    useEffect(() => {
        let token = localStorage.usertoken;
        let config = {
          headers: {
            Authorization: token,
          },
        };
        axios.get("http://localhost:8080/api/getDaily", config)
          .then((res) => setdailys(res.data[0]))
          .catch((err) => console.error(err));
      }, []);

    const dailyUpdate = (e) => {
        e.preventDefault();
        console.log(values);
        let config = {
          headers: {
            Authorization: localStorage.usertoken,
          },
        };
        axios.put("http://localhost:8080/api/updateDaily", values, config)
          .then((res) => {
            if (res) {
              window.location = "/";
            }
          })
          .catch((err) => console.log(err));
      };
    return (
        <React.Fragment>
            <Row>
        <Col sm={12} className={"createHospital"}>
          <h1>Daily Update</h1>
        </Col>
        <Col sm={12} className={"createHospital2"}>
          <Form onSubmit={dailyUpdate}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <p>Conform Cases*</p>
                  <Input
                    type="number"
                    name="cases"
                    value={values.cases || ""}
                    onChange={handlerChange}
                    placeholder={dailys.cases}
                    className={"createHosInput"}
                  />
                  <Input
                    type="text"
                    name="deaths"
                    value={values.dailyId = dailyId}
                    onChange={handlerChange}
                    className={"createHosInputId"}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
            <Col md={6}>
                <FormGroup>
                  <p>Conform Deaths*</p>
                  <Input
                    type="number"
                    name="deaths"
                    value={values.deaths || ""}
                    placeholder={dailys.deaths}
                    className={"createHosInput"}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <p>Conform Recoveries*</p>
                  <Input
                    type="number"
                    name="recoveries"
                    value={values.recoveries || ""}
                    placeholder={dailys.recoveries}
                    className={"createHosInput"}
                    onChange={handlerChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br />
            <Row form>
              <Col md={3}>
                <Button className={"addHosBtn"}> UPDATE DETAILS</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
        </React.Fragment>
    )
}

export default CreateDaily
