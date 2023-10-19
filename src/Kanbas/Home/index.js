import ModuleList from "../Courses/Modules/ModuleList";
import Sidebar from "../Courses/Modules/Sidebar";

function Home() {
  return (
    <div className="row">
      <div className="col">
        <ModuleList />
      </div>
      <div className="col" style={{minWidth : "18%", maxWidth: "18%", textAlign: "left"}}>
        <Sidebar />
      </div>
    </div>
  );
}
export default Home;
