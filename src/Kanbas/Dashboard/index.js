import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h2 style={{marginLeft : "36px", marginTop: "18px"}}>Dashboard</h2>
      <hr></hr>
      <div className="wd-dashboard list-group d-flex flex-row flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap flex-wrap p-2">
        {courses.map((course) => (
          <Link
            key={course._id}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <img style={{width : "100%"}} src={course.img}></img>
            <br></br>

            {course.number} <br></br>
            <h5>{course.name}</h5>
            <div style={{ fontSize: ".8em" }}>
              {course._id} <br></br>
              {course.startDate} <br></br>
              {course.endDate} <br></br>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
