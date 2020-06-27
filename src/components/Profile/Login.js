import React, { useState } from 'react'
import { Form, Input, Col, Button, Row} from "reactstrap";
import Background from '../Images/animated-graphic-2019-ncov.jpg';
import useForm from "../../hooks/useForm";
import axios from 'axios';
import './profile.css';

const Login = () => {

    const [values, handlerChange] = useForm();
    const [ setmessage] = useState({});

    const login = (e) => {
        e.preventDefault();
        console.log(values);
        axios.post("http://localhost:8080/api/login", { ...values })
          .then(res => {
            if (res.data.token) {
              localStorage.setItem("usertoken", res.data.token);
              if (localStorage) {
                window.location = '/'
              } else {
                window.location.reload(true);
              }
            }
            else{
              setmessage({message:res.data.message});
            }
          }).catch(err => console.log(err.data));
      };
    return (
        <React.Fragment>
        <Col lg={12} className={'regColom'}>
            <Row>
                <Col md={8} className={'imageReg'}><img src={Background} alt={''} className={'backGrountImageReg'} /></Col>
                <Col md={4} className={'colomReg'}>
                    <h1 className={'registerForm'}>LOGIN</h1>
                    <br />
                    <Form className={'REgForm'} onSubmit={login}>
                        <p className={'registerForm'}>Email*</p>
                        <Input className={'regInput'} 
                            type="email"
                            name="email"
                            value={values.email || ""}
                            onChange={handlerChange} />
                            <br/>
                        <p className={'registerForm'}>Password*</p>
                        <Input className={'regInput'} 
                            type="text"
                            name="password"
                            value={values.password || ""}
                            onChange={handlerChange} />
                            <br/>
                            <br/>
                            <Button className={'regInputBtn'}> LOGIN </Button>
                            <br/>
                            <br/>
                            <p className={'registerForm2'}>New member?<span><a className={'loginLInk'} href={'/login'}> Register</a></span></p>
                    </Form>
                </Col>
            </Row>
        </Col>
    </React.Fragment>
    )
}

export default Login
