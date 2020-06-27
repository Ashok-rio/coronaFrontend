import React,{ useState, useEffect } from 'react'
import { Row,Col, Card, CardBody } from 'reactstrap';
import axios from "axios";
import { useParams } from 'react-router';
import '../Hospital/hospital.css';


const GetOneCenter = () => {
    let { id } = useParams();
    const [getCenter,setCenter] = useState({});
    useEffect(()=>{
        let config = {
            headers: {
              Authorization: localStorage.usertoken
            }
          };
        axios.get(`http://localhost:8080/api/getOneCenter/${id}`,config)
          .then(res => setCenter(res.data))
          .catch(err => console.error(err));
    },[id])

    console.log(getCenter);
    return (
        <React.Fragment>
            <Row>
                <Col sm={12} className={'createHospital'}>
                    <h1>View Center</h1>
                </Col>
                <Col sm={12} className={'createHospital3'}>
                <Row>
                <Col sm={6}>
                    <Card className={'viewHospital'}>
                        <CardBody>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>Name</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{getCenter.centerName}</Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>State</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{getCenter.state}</Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>District</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{getCenter.district}</Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>Phone Number</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{getCenter.phone}</Col>
                        </Row>
                        </CardBody>
                    </Card>
                </Col>
                </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default GetOneCenter
