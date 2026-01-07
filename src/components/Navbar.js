import { Link } from "react-router-dom";

function Navbars() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          InternSite
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/learn">
              Learn
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbars;
