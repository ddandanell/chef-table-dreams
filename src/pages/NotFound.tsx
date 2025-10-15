import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-black text-foreground mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">Oops! Page not found</h2>
          <p className="py-6 text-lg text-muted-foreground">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <a href="/">
            <button className="btn btn-primary text-lg px-8 py-3">Return to Home</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
