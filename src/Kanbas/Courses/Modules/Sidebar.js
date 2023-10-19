import React from "react";
import {
    FaFileImport,
    FaArrowUp,
    FaBullseye,
    FaChartBar,
    FaBullhorn,
    FaBell,
  } from "react-icons/fa";

function Sidebar() {
  return (
    <div>
      <button id="btnFA" class="btn  btn-light">
        Unpublish
      </button>
      <button id="btnFA" disabled class="btn btn-success">
        Published
      </button>
      <p></p>
      <button type="button" class="btn  btn-light wd-home-status-button">
        <p>
          <FaFileImport/> Import Existing
          Content
        </p>
      </button>{" "}
      <br></br>
      <button type="button" class="btn  btn-light wd-home-status-button">
        <p>
          <FaArrowUp/> Import From Commons
        </p>
      </button>{" "}
      <br></br>
      <button type="button" class="btn  btn-light wd-home-status-button">
        <p>
          <FaBullseye/> Choose Home Page
        </p>
      </button>{" "}
      <br></br>
      <button type="button" class="btn  btn-light wd-home-status-button">
        <p>
          <FaChartBar/> View Course Stream
        </p>
      </button>{" "}
      <br></br>
      <button type="button" class="btn  btn-light wd-home-status-button">
        <p>
          <FaBullhorn/> New Announcement
        </p>
      </button>{" "}
      <br></br>
      <button type="button" class="btn  btn-light wd-home-status-button">
        <p>
          <FaChartBar/> New Analytics
        </p>
      </button>{" "}
      <br></br>
      <button type="button" class="btn  btn-light wd-home-status-button">
        <p>
            <FaBell/> View Course Notifications
        </p>
      </button>
      <p></p>
      <h3>Coming Up</h3>
      <p></p>
      <div className="link">
      <a href="#">View Calendar</a>
      <p></p>
      <ul style={{listStyle: "none"}}>
        <li>
          <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
        </li>
        <li>
          <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
        </li>
        <li>
          <a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
        </li>
      </ul>
      </div>
    </div>
  );
}
export default Sidebar;