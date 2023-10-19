import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import {
  FaEllipsisV,
} from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      <form style={{display: "inline"}}>
        <div className="wd-module-buttons">
        <button type="button" class="btn  btn-light">
          Collapse All
        </button>

        <button type="button" class="btn  btn-light">
          <i class="fa fa-check-circle" aria-hidden="true"></i> View Progress
        </button>

        <select class="form-select" style={{display: "inline", width: "200px"}}>
          <option>Publish All</option>
          <option>Publish All modules and items</option>
          <option>Publish modules only</option>
          <option>Unpublish All</option>
        </select>

        <button type="button" class="btn btn-danger">
          {" "}
          + Module
        </button>
        <button type="button" class="btn btn-danger">
          {" "}
          <FaEllipsisV/>
        </button>
        </div>
        
      </form>
      <ul className="wd-course-module list-group overflow-y:auto">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div>
              <li key={index} className="list-group-item">
                <h5 className="wd-module-content">{module.name}</h5>
                <p>{module.description}</p>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
