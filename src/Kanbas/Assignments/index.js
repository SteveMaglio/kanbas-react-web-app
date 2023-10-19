import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import { FaRegFileAlt, FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div
      className="row"
      style={{ paddingLeft: "0px", marginTop: "65px", width: "100%" }}
    >
      <div className="col">
        <input
          className="form-control justify-content-start float-start"
          style={{ width: "250px" }}
          id="text-fields-username"
          placeholder="Search for Assignments"
        />
      </div>
      <div className="col float-end">
        <button
          id="btnFA"
          className="btn  btn-light float-end"
          style={{ width: "130px" }}
          type="button"
        >
          Assignment
        </button>
        <button
          id="btnFA"
          className="btn  btn-light float-end"
          style={{ width: "100px" }}
          type="button"
        >
          Group
        </button>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <h5
        className="wd-module-content list-group overflow-y:auto"
        style={{ paddingLeft: "15px" }}
      >
        Assignments
      </h5>
      <div className="row wd-assignment" style={{ width: "100%" }}>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            <FaRegFileAlt className="custom-icon" /> {assignment.title}
            <div className="float-end">
              <FaCheckCircle className="custom-icon"/>
              <FaEllipsisV className="custom-icon"/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
