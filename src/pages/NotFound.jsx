import { useLocation, Link } from "react-router-dom";

function NotFound() {

  const location = useLocation();

  return (
    <div>
      <h1>404 - Page Not Found</h1>

      <p>
        Invalid Route:
        {location.pathname}
      </p>

      <Link to="/">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;