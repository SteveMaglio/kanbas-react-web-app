import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {

  const { courseId } = useParams();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
      <form style={{ display: "inline" }}>
        <div className="wd-module-buttons">
          <button type="button" class="btn  btn-light">
            Collapse All
          </button>

          <button type="button" class="btn  btn-light">
            <i class="fa fa-check-circle" aria-hidden="true"></i> View Progress
          </button>

          <select
            class="form-select"
            style={{ display: "inline", width: "200px" }}
          >
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
            <FaEllipsisV />
          </button>
        </div>
      </form>
      <div className="row" style={{ paddingTop: 30 }}>
        <div className="col" style={{ alignItems: "center" }}>
          <input
            className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
        </div>
        <div className="col">
          <textarea
            className="form-control"
            style={{ height: 30 }}
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </div>{" "}
        <div className="col">
          <button
            className="btn btn-light"
            onClick={() => handleUpdateModule(module)}
          >
            Update
          </button>
          <button className="btn btn-success" onClick={handleAddModule}>
            Add
          </button>
        </div>
      </div>
      <ul className="wd-course-module list-group overflow-y:auto">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <div>
              <li key={index} className="list-group-item">
                <div className="wd-module-content">
                  <h5>{module.name}</h5>
                  <div style={{ paddingRight: 20 }}>
                    <button
                      className="btn btn-light"
                      onClick={() => dispatch(setModule(module))}
                    >
                      Edit
                    </button>

                    <button
                      style={{ marginLeft: 10 }}
                      className="btn btn-danger"
                      onClick={() => handleDeleteModule(module._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p>{module.description}</p>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
