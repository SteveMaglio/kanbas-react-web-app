import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import Modules from "../Courses/Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import "../../Kanbas/Kanbas.css";
import { FaBars, FaGlasses } from "react-icons/fa";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const thePath = window.location.href;

  return (
    <div>
      <div className="" style={{ paddingLeft: "20px" }}>
        <h6 className="wd-breadcrumb link" style={{marginTop: "10px"}}>
          <FaBars className="wd-breadcrumb-icon" />
          <a href={thePath.substring(0, thePath.lastIndexOf("/"))}>
            {course._id}
          </a>
          {" > "} {thePath.substring(thePath.lastIndexOf("/") + 1)}
        </h6>
        <button
          id="btnFA"
          className="btn  btn-light float-end"
          style={{ width: "180px", marginTop: "10px"}}
          type="button"
        >
          <FaGlasses style={{marginRight: "5px"}}/> Student View
        </button>
        <hr></hr>
      </div>
      <div className="row">
        <div className="col-md-auto">
          <CourseNavigation />
        </div>
        <div className="col">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
