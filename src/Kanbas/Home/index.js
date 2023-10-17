import ModuleList from "../Courses/Modules/ModuleList";

function Home() {
  return (
    <div className="row"  style={{ minWidth: "208%" }}>
      <div className="col">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col" style={{ maxWidth: "15%", textAlign: "center"}}>
        <h2>Status</h2>
      </div>
    </div>
  );
}
export default Home;
