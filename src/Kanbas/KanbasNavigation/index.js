import "../../Kanbas/style.css";
import { Link, useLocation } from "react-router-dom";
import {
  FaRegUserCircle,
  FaTachometerAlt,
  FaBook,
  FaCalendarAlt,
  FaClock,
  FaInbox,
  FaQuestionCircle,
  FaPhotoVideo,
  FaArrowCircleRight,


} from "react-icons/fa";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [
    <FaRegUserCircle className="custom-icon-white" />,
    <FaTachometerAlt className="custom-icon" />,
    <FaBook className="custom-icon" />,
    <FaCalendarAlt className="custom-icon" />,
    <FaInbox className="custom-icon" />,
    <FaClock className="custom-icon" />,
    <FaPhotoVideo className="custom-icon" />,
    <FaArrowCircleRight className="custom-icon" />,
    <FaQuestionCircle className="custom-icon" />,
    

  ];
  const { pathname } = useLocation();
  return (
    <div className="wd-kn list-group-flush">
      <img style={{width : "100%"}} src={"../../images/nulogo.png"} alt="northeastern university logo"></img>
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
