import React from 'react'
import Background from '../Images/animated-graphic-2019-ncov.jpg';
import { Button } from 'reactstrap'
import './header.css';
import Home from './Home';

const Header = () => {
    let token = localStorage.usertoken
    return (
        <React.Fragment>
            {token == null ?
                <React.Fragment>
                <div className="mainImage">
                    <img src={Background} alt={''} className={'backGrountImage'} />
                </div>
                <div className={'learnMore'}>
                    <h1 className={'titleName'}>Get your Nearby<br />Corona Alret</h1>
                    <br />
                    <Button className={'learnMoreBtn'} href={'/register'}>Learn more</Button>
                </div>
                </React.Fragment>:(<Home/>)}
        </React.Fragment>
    )
}

export default Header