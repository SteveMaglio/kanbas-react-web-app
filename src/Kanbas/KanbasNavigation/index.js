import "../../Kanbas/style.css";
import { Link, useLocation } from "react-router-dom";
import {
  FaRegUserCircle,
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const icons = [
    <FaRegUserCircle className="custom-icon" />,
    <FaTachometerAlt className="custom-icon" />,
    <FaBook className="custom-icon" />,
    <FaCalendarAlt className="custom-icon" />,
  ];
  const { pathname } = useLocation();
  return (
    <div className="wd-kn list-group-flush">
      <img style={{width : "100%"}} src={"../../images/nulogo.png"}></img>
      {links.map((link, index) => (
        <Link
          style={{
            textAlign: "center",
          }}
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {icons[index]}
          <br></br>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
