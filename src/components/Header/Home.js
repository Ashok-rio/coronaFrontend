import React,{ useState,useEffect } from 'react'
import NavBar from './NavBar';
import axios from "axios";
import { useParams } from 'react-router';
import {
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';
import SlideNav from './SlideNav';
import Hospital from '../Hospital/Hospital';
import CreateHospital from '../Hospital/CreateHospital';
import GetHospital from '../Hospital/GetHospital';
import GetOneHospital from '../Hospital/GetOneHospital';
import EditHospital from '../Hospital/EditHospital';
import Center from '../TestingCenter/Center';
import GetCenter from '../TestingCenter/GetCenter';
import GetOneCenter from '../TestingCenter/GetOneCenter';
import EditCenter from '../TestingCenter/EditCenter';
import CreateDaily from '../Daily/CreateDaily';
import Report from '../Report/Report';
import GetOneReport from '../Report/GetOneReport';
import Profile from '../Profile/Profile';
import TestYourSelft from '../TestingCenter/TestYourSelft';
import Sliders from '../Slider/Sliders';

const Home = () => {
  const path = window.location.pathname;

  const [daily,setdaily] = useState({});

  let { id } = useParams();

  useEffect(() => {
    let token = localStorage.usertoken;
    let config = {
      headers: {
        Authorization: token,
      },
    };
    axios.get("http://localhost:8080/api/getDaily", config)
      .then((res) => setdaily(res.data[0]))
      .catch((err) => console.error(err));
  }, []);

  const paths = () =>{
    if(path === '/'){
      return <Hospital />
    }else if(path === '/addHospital'){
      return <CreateHospital />
    }else if(path === '/viewHospital'){
      return <GetHospital/>
    }else if(path === `/viewHospital/${id}`){
      return <GetOneHospital />
    }else if(path === `/editHospital/${id}`){
      return <EditHospital />
    }else if(path === '/addCenter'){
      return <Center />
    }
    else if(path === '/viewCenter'){
      return <GetCenter/>
    }
    else if(path === `/viewCenter/${id}`){
      return <GetOneCenter/>
    }
    else if(path === `/editCenter/${id}`){
      return <EditCenter />
    }
    else if(path === '/daily'){
      return <CreateDaily />
    }
    else if(path === '/report'){
      return <Report />
    }else if(path === `/report/${id}`){
      return <GetOneReport/>
    }
    else if(path === `/profile`){
      return <Profile />
    }
    else if(path === '/testYourSelf'){
      return <TestYourSelft />
    }
    else if(path === '/preventions'){
      return <Sliders />
    }
    else{
      return <></>
    }
  }



  return (
    <React.Fragment>
      <NavBar />
      <Row className={'mainContent'}>
        <Col lg={2} className={path === '/'?'sideNavBar':'sideNavBar2'}>
          <SlideNav />
        </Col>
        <Col lg={10}>
        {path === '/'?
        <React.Fragment>
        <Row className={'dailyUpdateRow'}>
                <Col sm={4}>
                  <Card className={'casersCard'}>
                    <CardBody>
                    <h4>Confirm cases</h4>
                    <h1 className={'dailyValues'}>{daily.cases}</h1>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={4} >
                <Card className={'deathsCard'}>
                    <CardBody>
                    <h4>Confirm deaths</h4>
                    <h1 className={'dailyValues'}>{daily.deaths}</h1>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={4}>
                <Card className={'recoveriesCard'}>
                    <CardBody>
                    <h4>Recoveries</h4>
                    <h1 className={'dailyValues'}>{daily.recoveries}</h1>
                    </CardBody>
                  </Card>
                </Col>
              </Row> <br/> </React.Fragment>:null}
              {paths()}
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Home
