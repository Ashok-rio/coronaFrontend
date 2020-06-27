import React from "react";
import { FaHome, FaPlusCircle, FaSyncAlt, FaFileAlt ,FaUserAlt} from "react-icons/fa";
import { FiLogOut ,FiSettings } from "react-icons/fi";
import jwt_decode from "jwt-decode";

const SlideNav = () => {
  let token = localStorage.usertoken;
  let decode = jwt_decode(token);
  let admin = "admin@gmail.com";

  return (
    <React.Fragment>
    {decode.email === admin?
      <div className={"sidenavContent"}>
        <p className={"sideNavContentText"}>
          <a href={"/"} className={"sideALink"}>
            <FaHome size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Home</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/addHospital"} className={"sideALink"}>
            <FaPlusCircle size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Add Hospital</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/addCenter"} className={"sideALink"}>
            <FaPlusCircle size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Add Testing Centers</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/daily"} className={"sideALink"}>
            <FaSyncAlt size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Daily Updates</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/report"} className={"sideALink"}>
            <FaFileAlt size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>User Report</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/"} className={"sideALink"} onClick={()=>{
            localStorage.removeItem("usertoken");
            window.location.pathname = '/';
          }}>
            <FiLogOut size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Logout</span>
          </a>
        </p>
      </div>:
      //user sideNav
      <div className={"sidenavContent"}>
        <p className={"sideNavContentText"}>
          <a href={"/"} className={"sideALink"}>
            <FaHome size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Home</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/profile"} className={"sideALink"}>
            <FaUserAlt size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Profile</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/preventions"} className={"sideALink"}>
            <FiSettings size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Preventions</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/testYourSelf"} className={"sideALink"}>
            <FaFileAlt size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Test your self</span>
          </a>
        </p>
        <p className={"sideNavContentText"}>
          <a href={"/"} className={"sideALink"} onClick={()=>{
            localStorage.removeItem("usertoken");
            window.location.pathname = '/';
          }}>
            <FiLogOut size="1.5rem" color={"black"} />{" "}
            <span className={"textContent"}>Logout</span>
          </a>
        </p>
      </div>}
    </React.Fragment>
  );
};

export default SlideNav;
