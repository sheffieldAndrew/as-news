import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation_navbar">
      <Link to="/" className="navigation_link">
        All Articles
      </Link>
      <Link to="/football" className="navigation_link">
        Football Articles
      </Link>
      <Link to="/coding" className="navigation_link">
        Coding Articles
      </Link>
      <Link to="/cooking" className="navigation_link">
        Cooking Articles
      </Link>
    </nav>
  );
};

export default Navigation;
