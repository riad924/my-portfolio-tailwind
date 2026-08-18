import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <div>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;