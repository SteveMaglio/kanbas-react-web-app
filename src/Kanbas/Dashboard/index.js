import {
  React,
  //useState
} from "react";
import { Link } from "react-router-dom";
//import { FaEllipsisV, FaFileAlt } from "react-icons/fa";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <h2 style={{ marginLeft: "36px", marginTop: "18px" }}>Dashboard</h2>
      <hr></hr>
      <div className="row" style={{ marginLeft: "36px", marginTop: "18px" }}>
        <h5>Course</h5>
        <div className="col">
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>
        <div className="col">
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
        </div>
        <div className="col">
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </div>
        <div className="col">
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>

        <div className="col">
          <button className="button btn btn-success" onClick={addNewCourse}>
            Add
          </button>

          <button
            className="button btn btn-danger"
            onClick={(event) => {
              event.preventDefault();
              deleteCourse(course._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="wd-dashboard list-group d-flex flex-row flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap flex-wrap p-2">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <img
              id="ImgEmployee"
              style={{ width: "100%" }}
              src={course.img ? course.img : "../../images/color_blue.jpg"}
              alt=""
            />
            <br></br>
            {course.number} <br></br>
            <h5>{course.name}</h5>
            <div style={{ fontSize: ".8em" }}>
              {course._id} <br></br>
              {course.startDate} <br></br>
              {course.endDate} <br></br>
            </div>
            <button
              className="button btn btn-light"
              onClick={() => {
                updateCourse(course);
              }}
            >
              Update
            </button>
            <button
              className="button btn btn-light"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
