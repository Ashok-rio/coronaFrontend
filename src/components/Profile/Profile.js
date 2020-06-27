import React, { useState, useEffect } from "react";
import { Row, Col,Card,CardBody, Input, Form, Button} from "reactstrap";
import axios from "axios";
import '../Hospital/hospital.css';
import useForm from '../../hooks/useForm';

const Profile = () => {
    const [values,handleChange] = useForm();
    const [profile,setProfile] = useState({})
    useEffect(()=>{
        let config = {
            headers: {
              Authorization: localStorage.usertoken
            }
          };
        axios.get(`http://localhost:8080/api/getUser`,config)
          .then(res => setProfile(res.data))
          .catch(err => console.error(err));
    },[])

    const updateProfile = (e) =>{
        e.preventDefault();
        console.log(values)
        let config = {
            headers: {
              Authorization: localStorage.usertoken
            }
          };
        axios.put(`http://localhost:8080/api/updateUser`,values,config)
          .then(res => window.location.reload(true))
          .catch(err => console.error(err));
    }
    return (
        <React.Fragment>
            <Row>
                <Col sm={12} className={'createHospital'}>
                    <h1>Profile</h1>
                </Col>
                <Col sm={12} className={'createHospital3'}>
                <Row>
                <Col sm={6}>
                    <Card className={'viewHospital'}>
                    <Form onSubmit={updateProfile}>
                        <CardBody>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>Name</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={4}><Input type="text" name="name" value={values.name} placeholder={profile.name} onChange={handleChange} /></Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>Email</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={4}><Input type="email" name="email" value={values.email || profile.email} disabled onChange={handleChange} /></Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>Phone Number</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={4}><Input type="number" name="phone" value={values.phone} placeholder={profile.phone} onChange={handleChange} /></Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>Address</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={4}><Input type="textarea" name="address" value={values.address} placeholder={profile.address} onChange={handleChange} /></Col>
                        </Row>
                        <Button>UPDATE PROFILE</Button>
                        </CardBody>
                        </Form>
                    </Card>
                </Col>
                </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Profile
