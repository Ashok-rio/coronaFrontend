import React, { useState } from 'react'
import {  Form, Input, Col, Button, Row } from "reactstrap";
import Background from '../Images/animated-graphic-2019-ncov.jpg';
import useForm from "../../hooks/useForm";
import axios from 'axios';
import './profile.css';


const Register = () => {

    const [values, handlerChange] = useForm();
    const [ setmessage] = useState({});

    const userRegister = (e) => {
        e.preventDefault();
        let [name, email, password, conformPassword] = [values.name, values.email, values.password,values.conformPassword]
        if (name !== undefined) {
          if (name.length >= 5) {
            if (email !== null && email !== undefined) {
              if (password !== "" && password !== undefined && password.length >= 6) {
                if(password === conformPassword){
                    axios.post("http://localhost:8080/api/create", { ...values })
                        .then(res => {
                          setmessage({ errors: res.data.message });
                          if (res.data._id !== '' && res.data._id !== undefined) {
                            window.location = '/login';
                          }
                        })
                        .catch(err => console.log(err));
                }
                else {
                    setmessage({ message: "password", error: 'password didn"t match' })    
                }
              } else {
                setmessage({ message: "password", error: 'password must cotain 6 char' })
              }
            } else {
              setmessage({ message: "email", error: "please input email to register" })
            }
          }
          else {
            setmessage({ message: "name", error: "name must 5 char" })
          }
        }
        else {
          setmessage({ message: "name", error: 'please input name to register!' })
        }
      };

    return (
        <React.Fragment>
            <Col lg={12} className={'regColom'}>
                <Row>
                    <Col md={8} className={'imageReg'}><img src={Background} alt={''} className={'backGrountImageReg'} /></Col>
                    <Col md={4} className={'colomReg'}>
                        <h1 className={'registerForm'}>Register</h1>
                        <br />
                        <Form className={'REgForm'} onSubmit={userRegister}>
                            <p className={'registerForm'}>Name*</p>
                            <Input className={'regInput'} 
                                type="text"
                                name="name"
                                value={values.name || ""}
                                onChange={handlerChange} />
                                <br/>
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
                            <p className={'registerForm'}>Conform Password*</p>
                            <Input className={'regInput'} 
                                type="text"
                                name="conformPassword"
                                value={values.conformPassword || ""}
                                onChange={handlerChange} />
                                <br/>
                                <br/>
                                <Button className={'regInputBtn'}> REGISTER </Button>
                                <br/>
                                <br/>
                                <p className={'registerForm2'}>Already register?<span><a className={'loginLInk'} href={'/login'}> Login</a></span></p>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    )
}

export default Register
