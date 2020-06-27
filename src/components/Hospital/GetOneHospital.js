import React,{ useState, useEffect } from 'react'
import { Row,Col, Card, CardBody } from 'reactstrap';
import axios from "axios";
import { useParams } from 'react-router';
import './hospital.css';

const GetOneHospital = props => {

    let { id } = useParams();

    const [oneHos,setoneHos] = useState({});

    useEffect(()=>{
        let config = {
            headers: {
              Authorization: localStorage.usertoken
            }
          };
        axios.get(`http://localhost:8080/api/getOneHospital/${id}`,config)
          .then(res => setoneHos(res.data))
          .catch(err => console.error(err));
    },[id])

    return (
        <React.Fragment>
            <Row>
                <Col sm={12} className={'createHospital'}>
                    <h1>View Hospital</h1>
                </Col>
                <Col sm={12} className={'createHospital3'}>
                <Row>
                <Col sm={6}>
                    <Card className={'viewHospital'}>
                        <CardBody>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>Name</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{oneHos.hospitalName}</Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>State</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{oneHos.state}</Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>District</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{oneHos.district}</Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>No.Of.Bets </Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{oneHos.noOfBets}</Col>
                        </Row>
                        <Row className={'viewHosRow'}>
                            <Col sm={3}>Phone Number</Col>
                            <Col sm={1}>:</Col>
                            <Col sm={3}>{oneHos.phone}</Col>
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

export default GetOneHospital
