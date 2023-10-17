import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="wd-course-module list-group overflow-y:auto">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div>
            <li key={index} className="list-group-item">
              <h5 className="wd-course-module-header">{module.name}</h5>
              <p>{module.description}</p>
            </li>
          </div>
        ))}
    </ul>
  );
}
export default ModuleList;
